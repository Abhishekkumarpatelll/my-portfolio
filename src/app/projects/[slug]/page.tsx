import { notFound } from 'next/navigation'
import { projects } from '@/app/data/projects'
import type { Metadata, ResolvingMetadata } from 'next'
import ProjectDetail from '@/components/ProjectDetail'

type PageProps = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

// export async function generateMetadata(
//   { params }: PageProps,
//   _parent: ResolvingMetadata // use underscore to avoid lint error if unused
// ): Promise<Metadata> {
//   const project = projects.find((p) => p.slug === params.slug)
//   if (!project) return {}

//   return {
//     title: `${project.title} | My Portfolio`,
//     description: project.description,
//     openGraph: {
//       title: `${project.title} | My Portfolio`,
//       description: project.description,
//       images: [
//         {
//           url: project.image,
//           width: 1200,
//           height: 630,
//           alt: project.title,
//         },
//       ],
//     },
//   }
// }

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
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


export default async function ProjectPage({ params }: PageProps) {
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
