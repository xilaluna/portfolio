import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionPage from "@/components/TransitionPage";
import Heading from "@/components/Heading";
import { supabase } from "@/utils/supabase";
import { ProjectInterface } from "@/types";

export async function getStaticProps() {
  const { data, error } = await supabase
    .from("projects")
    .select("*, images!inner(*)")
    .eq("images.type", "thumbnail")
    .order("order");
  if (error) {
    console.log(error);
  }

  return {
    props: {
      projects: data,
    },
  };
}

const Project: React.FC<{ project: ProjectInterface }> = ({ project }) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="flex flex-col space-y-2">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <Image
            src={project.images[0].src}
            alt={project.images[0].alt}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <h2 className="heading-color link-style pt-2 text-xl hover:cursor-pointer">
          {project.title}
        </h2>
        <p>{project.subtitle}</p>
      </div>
    </Link>
  );
};

const Projects: NextPage<{ projects: ProjectInterface[] }> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Projects - Xila Luna</title>
        <meta name="description" content="Xila Luna's projects" />
        <meta property="og:title" content="Projects - Xila Luna" />
        <meta property="og:url" content="https://xilaluna.com/projects" />
        <meta
          property="og:image"
          content="https://paydmgjryegxnlsxvqke.supabase.co/storage/v1/object/public/public/images/website-image.png?t=2022-09-14T01%3A50%3A00.002Z"
        />
      </Head>

      <TransitionPage className="secondary-page">
        <Heading title="Projects" subtitle="A collection of my work" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
          {projects.map((project) => {
            return <Project key={project.id} project={project} />;
          })}
        </div>
      </TransitionPage>
    </>
  );
};

export default Projects;
