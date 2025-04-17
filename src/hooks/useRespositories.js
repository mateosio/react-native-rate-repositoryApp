// import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

export const useRepositories = () => {
    // COMENTAR PARA USAR API REST EN LUGAR DE graphql.
    try {
        const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES);
       
        const { repositories = null } = data;
        const repos = repositories ? repositories.edges.map((edge) => edge.node) : [];
        return { repos, loading, refetch };

    } catch (error) {
        
        return { repos: [] };
    }

    // DESCOMENTAR PARA USAR API REST EN LUGAR DE graphql.
    // const [repositories, setRepositories] = useState(null);
    
    // const fetchRepositories = async () => {
    //     const response = await globalThis.fetch("http://localhost:5000/api/repositories");
    //     const json = await response.json();
    //     setRepositories(json);
    // };

    // useEffect(() =>{
    //     fetchRepositories();
    // }, []); 

    // const repos = repositories ? repositories.edges.map((edge) => edge.node) : [];
    // return { repos, loading, refetch };

}