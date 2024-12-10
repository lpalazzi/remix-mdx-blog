interface BasePostServiceParams {
  path: string
}

type PostMeta<Frontmatter> = {
  slug: string
  frontmatter: Frontmatter
}

export class BasePostService<Frontmatter extends { publishedDate: string }> {
  private path: string
  private modules: Record<
    string,
    {
      frontmatter: Frontmatter
    }
  >
  private posts: PostMeta<Frontmatter>[]

  constructor(params: BasePostServiceParams) {
    this.path = params.path

    const allModules = import.meta.glob<{ frontmatter: Frontmatter }>(
      '/app/**/*.mdx',
      {
        eager: true,
      },
    )

    this.modules = Object.fromEntries(
      Object.entries(allModules).filter(([filepath]) =>
        filepath.startsWith(this.path),
      ),
    )

    this.posts = Object.entries(this.modules)
      .map(([filepath, data]) => ({
        frontmatter: data.frontmatter,
        slug: filepath
          .replace(/\.mdx$/, '')
          .split('/')
          .pop() as string,
      }))
      .sort(
        (a, b) =>
          new Date(b.frontmatter.publishedDate).getTime() -
          new Date(a.frontmatter.publishedDate).getTime(),
      )
  }

  public getAllPosts() {
    return this.posts
  }

  public getFrontmatter(slug: string) {
    return this.modules[`${this.path}/${slug}.mdx`]?.frontmatter
  }
}
