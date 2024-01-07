import { View, Text, FlatList, Switch } from "react-native";
import { globalStyles } from "../../styles";
import { usePermissionsHelper, PermissionDataProps, PermissionProfiles } from "./permissionsHelper.hook";
import { permissionsStyles } from "./permissions.styles";

export const Permissions = () => {

    const { permissionsData, profiles } = usePermissionsHelper();

    const _renderItem = (item: PermissionDataProps) => (
        <View style={globalStyles.card}>

            <View style={permissionsStyles.cardTitleContainer}>
				<Text style={permissionsStyles.cardTitle}>{ item.title }</Text>
			</View>

            <View style={permissionsStyles.containerToggles}>
                {
                    profiles.map((profile: PermissionProfiles) => (
                        <View style={{ alignItems: 'center' }} key={item.title + profile}>

                            <Text style={permissionsStyles.toggleTitle}>{ profile }</Text>

                            <Switch
                                testID="permission-switch"
                                trackColor={{ false: "#ccc", true: "#15A500" }}
                                thumbColor='#fff'
                                ios_backgroundColor="#ccc"
                                onValueChange={(value: boolean) => item.action({ profile, value })}
                                value={item.data[profile]}
                            />

                        </View>
                    ))
                }
            </View>

        </View>
    )

    return(
        <FlatList
            contentContainerStyle={permissionsStyles.container}
            renderItem={ ({item}) => _renderItem(item) }
            data={permissionsData}
            keyExtractor={(item, index) => item.title + index}
            ListHeaderComponent={() => <Text style={permissionsStyles.screenTitle}>Permissions</Text>}
        />   
    )
}

