import { ProjectInterface } from "@/common.types";
import { fetchAllProjects } from "@/lib/actions";

type ProjectsSearch = {
    projectSearch: {
        edges: { node: ProjectInterface }[],
        pageInfo: {
            hasPreviousPage: boolean,
            hasNextPage: boolean,
            startCursor: string,
            endCursor: string
        }
    }
}

const Home = async() =>{
    const data = await fetchAllProjects() as ProjectsSearch;

    const projectsToDisplay = data?.projectSearch?.edges || [];

    if (projectsToDisplay.length === 0) {
        return (
            <section className="flexStart flex-col paddings">
                Categories

                <p className="no-result-text text-center">No projects found, go create some first.</p>
            </section>
        );
    }

    const pagination = data?.projectSearch?.pageInfo;

    return (
        <section className="flex-start flex-col paddings mb-16">
            <h1>Categories</h1>
            
            <section className="projects-grid">
                {projectsToDisplay.map(({ node }: { node: ProjectInterface }) => (
                    <ProjectCard/>
                ))}
            </section>

            <h1>LoadMore</h1>
        </section>
    );
}

export default Home;