import {FlatList, Text} from "react-native";
import RepositoryItem from "./RepositoryItem";

import { useRepositories} from "../hooks/useRespositories";

const RepositoryList = () => {
    const {repos} = useRepositories();
    console.log(repos);
    
    
    return (
        <FlatList
        data={repos}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({item}) => (
            <RepositoryItem {...item}/>
        )}
        />
    )
}

export default RepositoryList;