import { notFound } from 'next/navigation'
import { projects } from '@/app/data/projects'
import type { Metadata } from 'next'
import ProjectDetail from '@/components/ProjectDetail'


type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
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

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)

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

 
 