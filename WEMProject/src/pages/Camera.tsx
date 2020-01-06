import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { uploadPicture } from '../reducks/camera';
import { connect } from 'react-redux';
import { NavigationStackOptions } from 'react-navigation-stack';
import { useNavigation } from '../hooks';

type Props = {
  isUploading: boolean;
  uploadPicture: any;
}

export const Camera: React.FunctionComponent<Props> & { navigationOptions?: NavigationStackOptions } = (props): JSX.Element => {
  const navigation = useNavigation();
  const { assetId } = navigation.state.params;

  takePicture = async() => {
    if (this.camera) {
      const options = { quality: 0.1, base64: true };
      const data = await this.camera.takePictureAsync(options);
      props.uploadPicture(assetId, data.base64);
      navigation.goBack(null);
    }
  };

  return (
    <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          captureAudio={false}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
  );

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });
  const mapStateToProps = state => ({ isUploading: state.isUploading });
  const mapDispatchToProps = dispatch => ({ uploadPicture: (assetId: string, base64: string) => dispatch(uploadPicture(assetId, base64)) });
  const CameraPage = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Camera);
  export default CameraPage;
