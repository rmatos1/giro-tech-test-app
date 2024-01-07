import { View, Text, FlatList, TouchableHighlight, Image } from "react-native";
import { clientsStyles } from "./clients.styles";
import { useClientsHelper, ClientsListProps, CardLabels } from "./clientsHelper.hook";
import { ClientsListHeader, ClientsListFooter } from "../../components";
import { WarningModal } from "../../modals";
import { Skeleton } from "react-native-skeletons";

export const Clients = () => {

    const { 
        currentDisplayedclients, 
        isLoading, 
        icons, 
        onOpenWarningModal, 
        cardLabels, 
        totalPages } = useClientsHelper();

    const _renderItem = (item: ClientsListProps) => (
        <View style={clientsStyles.card} testID="client-card">
			
			<View style={clientsStyles.iconsContainer}>
				
				{!isLoading && 
					icons.map((icon, index) => {

						return(
							<TouchableHighlight
                                testID="card-icon"
								key={`cardIcon${index}`}
								activeOpacity={.5}
								underlayColor="#fff"
								onPress= {onOpenWarningModal}
							>
								<Image source={icon} style={clientsStyles.icon} />
							</TouchableHighlight>
						)
					})
				}

			</View>

			{
				cardLabels.map(label => (
                    <View key={label}>
                        
                        <Text style={clientsStyles.cardTitle}>{ CardLabels[label] }</Text>

                        {
                            isLoading ? 
                            (<Skeleton width={150} height={22} />) : (<Text style={clientsStyles.cardText}>{ item[label] }</Text>)
                        }
                        
                    </View>
                ))
			}	

		</View>
    )

    return(
        <>
            <FlatList
                contentContainerStyle={clientsStyles.container}
                renderItem={ ({ item }) => _renderItem(item) }
                data={currentDisplayedclients}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={() => <ClientsListHeader onOpenWarningModal={onOpenWarningModal} />}
            /> 
        
            <ClientsListFooter totalPages={totalPages} />

            <WarningModal />
        </>
    )
}