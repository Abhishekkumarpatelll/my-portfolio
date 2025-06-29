import { notFound } from 'next/navigation'
import { projects } from '@/app/data/projects'
import type { Metadata, ResolvingMetadata } from 'next'
import ProjectDetail from '@/components/ProjectDetail'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata(
  props: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await props.params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}

  return {
    title: `${project.title} | My Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | My Portfolio`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

export default async function ProjectPage(props: PageProps) {
  const { slug } = await props.params
  const project = projects.find((p) => p.slug === slug)

  if (!project) return notFound()

  return (
    <ProjectDetail
      title={project.title}
      description={project.description}
      role={project.role}
      stack={project.technologies}
      challenges={project.challenge}
      liveLink={project.liveDemo}
      repoLink={project.github}
      screenshots={project.screenshots}
    />
  )
}
