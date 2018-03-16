import React from 'react';
import { connectStyle, View, Text, Content, Separator, H3, Button } from 'native-base';

import { capitalizeFirstLetter } from '../Lib/CommonUtils';
import { formatLocationString } from '../Lib/LocationUtils';
import { formatDate } from '../Lib/DateUtils';

class JobDetailView extends React.Component {
  render() {
    const { navigation, style } = this.props
    const { record } = navigation.state.params;
    const { title, location, description, startDate, position, jobType } = record;

    return (
      <Content backgroundWhite>
        <View style={style.titleContainer}>
          <H3 style={style.titleText}>{capitalizeFirstLetter(title)}</H3>
          <Text>{formatLocationString(location)}</Text>
        </View>
        <Separator bordered>
          <Text>DETAILS</Text>
        </Separator>
        <View style={style.detailsContent}>
          <View style={style.detailsRow}>
            <View><Text style={style.detailsName}>Start date:</Text></View>
            <View><Text style={style.detailsValue}>{formatDate(startDate, 'long')}</Text></View>
          </View>
          <View style={style.detailsRow}>
            <View><Text style={style.detailsName}>Position:</Text></View>
            <View><Text style={style.detailsValue}>{position}</Text></View>
          </View>
          <View style={style.detailsRow}>
            <View><Text style={style.detailsName}>Job type:</Text></View>
            <View><Text style={style.detailsValue}>{jobType}</Text></View>
          </View>
        </View>
        <Separator>
          <Text>DESCRIPTION</Text>
        </Separator>
        <View style={{padding: 10}}>
          <Text>{description}</Text>
        </View>
      </Content>
    )
  }
}

const styles = {
  titleContainer: {
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  detailsContent: {
    padding: 10
  },
  detailsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  detailsName: {
    fontSize: 12,
    width: 80
  },
  detailsValue: {
    color: "#898989",
    fontSize: 12
  }
}

export default connectStyle('NativeBase.JobDetailView', styles)(JobDetailView);
