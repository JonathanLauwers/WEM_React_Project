import React from 'react';
import { View, TextInput, Button, Text, ActivityIndicator} from 'react-native';
import { useNavigation } from '../hooks';
import { NavigationStackOptions } from 'react-navigation-stack';
import { Colors } from '../styles/_colors';
import { styles } from './CreateTicket.styles';
import { Asset, Ticket } from '../data';
import { H2, H1 } from '../ui/TextHeaders';
import { connect } from 'react-redux';
import { createTicket } from '../reducks/ticket';

type Props = {
  asset: Asset,
  postTicket: any,
  isLoading: boolean,
}

type TicketData = {
  assetId: string,
  description: string,
}

export const CreateTicket: React.FunctionComponent<Props> & { navigationOptions?: NavigationStackOptions } = (props): JSX.Element => {
  const [description, setDescription] = React.useState('');

  const navigation = useNavigation();
  const { asset } = navigation.state.params;

  const createTicket = () => {
    const ticket: TicketData = {
      assetName: asset.asset.name,
      description: description,
    };
    props.postTicket(ticket);
  };

  return (
    <View style={{ padding: 8 }}>
      <H1>New ticket for asset {asset.asset.id}</H1>
      
        {!props.isLoading ? 
        <View style={styles.LabelFieldRow}>
          
          <H2>Description</H2>
          <TextInput 
            key="description" 
            style={styles.input} 
            multiline numberOfLines={4} 
            placeholder="A small description"
            value={description}
            onChangeText={text => setDescription(text)}
            editable={!props.isLoading}
          />     
          <Button title="Submit" color={Colors.primary} onPress={() => createTicket()}></Button>
        </View>
        : 
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={Colors.darkBlue} />
        </View>
          }
    </View>
  );

};

CreateTicket.navigationOptions = () => ({
  title: 'Create ticket',
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTitleStyle: {
    color: '#FFF'
  },
  headerBackTitleStyle: {
    color: '#FFF'
  },
});

const mapStateToProps = state => ({ isLoading: state.ticket.isLoadingCreate });
const mapDispatchToProps = dispatch => ({ postTicket: (ticket: TicketData) => dispatch(createTicket(ticket)) });
const CreateTicketPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTicket);
export default CreateTicketPage;
