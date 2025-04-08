import {FlatList, Text} from "react-native";
import RepositoryItem from "./RepositoryItem";

const repositories = [{
    id: 1,
    name: "Mate",
    description: "This is a description",
    language: "JavaScript",
    stargazersCount: 10,
    ownerAvatarUrl: "https://avatars.githubusercontent.com/u/1?v=4"
}]

const RepositoryList = () => {
    return (
        <FlatList
        data={repositories}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({item}) => (
            <RepositoryItem {...item}/>
        )}
        />
    )
}

export default RepositoryList;