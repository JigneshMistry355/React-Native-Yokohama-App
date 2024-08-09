import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper'; 
import styles from './style';

interface VehicleDetails {
  registrationNumber: string;
  make: string;
  model: string;
  brand: string;
  productName: string;
  tyreSize: string;
  tyreQuantity: number;
  tyre1SerialNumber: string;
  tyre1Image: string | null;
  tyre2SerialNumber: string;
  tyre2Image: string | null;
}

interface CustomerDetails {
    customerName: string,
    mobileNumber: number | null,
    address: string,
    state: string,
    pinCode: number | null,
}

const WarrantyRegistrationForm = () => {

  // ---------------------------------------------------------------------------------

  // Handle Radio Button and its values
  const [registrationOption, setRegistrationOption] = useState<string>('');

  const handleRadioButtonChange = (option : string) => {
    setRegistrationOption(option);
  };
  // ----------------------------------------------------------------------------------

  // Handle Customer Details and its values
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    customerName: '',
    mobileNumber: null,
    address: '',
    state: '',
    pinCode: null,
  });

  const handleCustomerDetailsChange = (field : keyof CustomerDetails, value : string) => 
  {
    setCustomerDetails((prevState) => (
      { 
        ...prevState, 
        [field]: field === 'mobileNumber' || field == 'pinCode' ? (value ? parseInt(value, 10) : null) : value,
      }
    ));
  };

  // ----------------------------------------------------------------------------------
  
  // Handle Vehicle Details and its values
  const [vehicleDetails, setVehicleDetails] = useState<VehicleDetails>({
    registrationNumber: '',
    make: '',
    model: '',
    brand: '',
    productName: '',
    tyreSize: '',
    tyreQuantity: 0,
    tyre1SerialNumber: '',
    tyre1Image: null,
    tyre2SerialNumber: '',
    tyre2Image: null,
});

  const handleVehicleDetailsChange = (field:keyof VehicleDetails, value:string) => {
    setVehicleDetails((prevState) => (
      { ...prevState, 
        [field]: field === 'tyreQuantity' ? (value ? parseInt(value, 10) : null) : value,
      }
    ));
  };

  // ----------------------------------------------------------------------------------

  // Handle Optional Details and its values
  const [optionalDetails, setOptionalDetails] = useState({
    invoiceNumber: '',
    invoiceImage: null,
    invoiceDate: '',
    odoMeterReading: '',
    odoMeterImage: null,
  });

  const handleOptionalDetailsChange = (field:string, value:string) => {
    setOptionalDetails((prevState) => ({ ...prevState, [field]: value }));
  };

  // ----------------------------------------------------------------------------------

  const [oldTyreDetails, setOldTyreDetails] = useState({
    oldTyreCompany: '',
    oldTyreBrand: '',
    oldTyreSize: '',
  });

  const handleOldTyreDetailsChange = (field:string, value:string) => {
    setOldTyreDetails((prevState) => ({ ...prevState, [field]: value }));
  };

  // ----------------------------------------------------------------------------------

  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

  // ----------------------------------------------------------------------------------

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [capturedImages, setCapturedImages] = useState({});
 
  const cameraRef = useRef(null);

  const handleCameraOpen = (p0: string) => {
    setIsCameraOpen(true);
  };

  const handleCameraClose = () => {
    setIsCameraOpen(false);
  };

  const handleCapture = async (imageKey:any) => {
    // if (cameraRef.current) {
    //   const capturedImage = await cameraRef.current.takePictureAsync();
    //   setCapturedImages((prevState) => ({ ...prevState, [imageKey]: capturedImage.uri }));
    //   handleCameraClose();
    // }
  };

  // ----------------------------------------------------------------------------------

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({
      registrationOption,
      customerDetails,
      vehicleDetails,
      optionalDetails,
      oldTyreDetails,
      capturedImages,
      termsAccepted,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Warranty Registration Form</Text>

      {/* Radio Buttons */}
      <RadioButton.Group onValueChange={handleRadioButtonChange} value={registrationOption}>
        <RadioButton.Item label="Available - Vehicle Registration Number" value="available" style={styles.radioButton} labelStyle={styles.radioLabel} color='#ff0000'/>
        <RadioButton.Item label="Not Available - Vehicle Registration Number" value="notAvailable" style={styles.radioButton} labelStyle={styles.radioLabel} color='#ff0000'/>
        <RadioButton.Item label="New Vehicle" value="newVehicle" style={styles.radioButton} labelStyle={styles.radioLabel} color='#ff0000'/>
      </RadioButton.Group>

      {(registrationOption === 'available' || registrationOption === 'notAvailable') && (
          <TextInput
            style={styles.input}
            placeholder="Vehicle Registration Number"
            placeholderTextColor="#ccc"
            onChangeText={(value) => handleVehicleDetailsChange('registrationNumber', value)}
            value={vehicleDetails.registrationNumber}
          />
        )}

      {/* Customer Details */}
      <View>
        <Text style={styles.sectionHeader}>Customer Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Customer Name"
          placeholderTextColor="#ccc"
          onChangeText={(value) => handleCustomerDetailsChange('customerName', value)}
          value={customerDetails.customerName}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          placeholderTextColor="#ccc"
          onChangeText={(value) => handleCustomerDetailsChange('mobileNumber', value)}
          value={customerDetails.mobileNumber !== null ? customerDetails.mobileNumber.toString() : ''}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor="#ccc"
          onChangeText={(value) => handleCustomerDetailsChange('address', value)}
          value={customerDetails.address}
        />
        <TextInput
          style={styles.input}
          placeholder="State"
          placeholderTextColor="#ccc"
          onChangeText={(value) => handleCustomerDetailsChange('state', value)}
          value={customerDetails.state}
        />
        <TextInput
          style={styles.input}
          placeholder="Pin Code"
          placeholderTextColor="#ccc"
          onChangeText={(value) => handleCustomerDetailsChange('pinCode', value)}
          value={customerDetails.pinCode !== null ? customerDetails.pinCode.toString() : ''}
        />
      </View>

      {/* Vehicle Details */}
      <View>
        <Text style={styles.sectionHeader}>Vehicle Details</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Make"
          placeholderTextColor="#ccc"
          onChangeText={(value) => handleVehicleDetailsChange('make', value)}
          value={vehicleDetails.make}
        />
        <TextInput
          style={styles.input}
          placeholder="Model"
          placeholderTextColor="#ccc"
          onChangeText={(value) => handleVehicleDetailsChange('model', value)}
          value={vehicleDetails.model}
        />
        <TextInput
          style={styles.input}
          placeholder="Brand"
          placeholderTextColor="#ccc"
          onChangeText={(value) => handleVehicleDetailsChange('brand', value)}
          value={vehicleDetails.brand}
        />
        <TextInput
          style={styles.input}
          placeholder="Product Name"
          placeholderTextColor="#ccc"
          onChangeText={(value) => handleVehicleDetailsChange('productName', value)}
          value={vehicleDetails.productName}
        />
        <TextInput
          style={styles.input}
          placeholder="Tyre Size"
          placeholderTextColor="#ccc"
          onChangeText={(value) => handleVehicleDetailsChange('tyreSize', value)}
          value={vehicleDetails.tyreSize}
        />

        <Text style={[styles.sectionHeader, styles.sectionHeaderAdditional]}>Number of tyres</Text>
        <RadioButton.Group
          onValueChange={(value) => handleVehicleDetailsChange('tyreQuantity', value)}
          value={vehicleDetails.tyreQuantity.toString()}
        >
          <RadioButton.Item 
              label="1" 
              value={'1'} 
              style={styles.radioButton} 
              labelStyle={styles.radioLabel} 
              color='#ff0000' />
          <RadioButton.Item 
              label="2" 
              value={'2'} 
              style={styles.radioButton} 
              labelStyle={styles.radioLabel} 
              color='#ff0000'/>
        </RadioButton.Group>

        {vehicleDetails.tyreQuantity === 1 && (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Tyre 1 Serial Number"
              placeholderTextColor="#ccc"
              onChangeText={(value) => handleVehicleDetailsChange('tyre1SerialNumber', value)}
              value={vehicleDetails.tyre1SerialNumber}
            />
            <TouchableOpacity style={styles.button} onPress={() => handleCameraOpen('tyre1Image')}>
              <Text style={styles.buttonText}>Take Tyre 1 Photo</Text>
            </TouchableOpacity>
            {/* {isCameraOpen && (
              <Camera style={styles.camera} type={cameraType} ref={cameraRef}>
                <View style={styles.cameraControls}>
                  <Button title="Capture" onPress={() => handleCapture('tyre1Image')} />
                  <Button title="Close" onPress={handleCameraClose} />
                </View>
              </Camera>
            )} */}
            {/* {capturedImages.tyre1Image && (
              <Image source={{ uri: capturedImages.tyre1Image }} style={styles.capturedImage} />
            )} */}
          </View>
        )}
        {vehicleDetails.tyreQuantity === 2 && (
          <>
            <View>
            <TextInput
              style={styles.input}
              placeholder="Tyre 1 Serial Number"
              placeholderTextColor="#ccc"
              onChangeText={(value) => handleVehicleDetailsChange('tyre1SerialNumber', value)}
              value={vehicleDetails.tyre1SerialNumber}
            />
            <TouchableOpacity style={styles.button} onPress={() => handleCameraOpen('tyre1Image')}>
              <Text style={styles.buttonText}>Take Tyre 1 Photo</Text>
            </TouchableOpacity>
            {/* {isCameraOpen && (
              <Camera style={styles.camera} type={cameraType} ref={cameraRef}>
                <View style={styles.cameraControls}>
                  <Button title="Capture" onPress={() => handleCapture('tyre1Image')} />
                  <Button title="Close" onPress={handleCameraClose} />
                </View>
              </Camera>
            )} */}
            {/* {capturedImages.tyre1Image && (
              <Image source={{ uri: capturedImages.tyre1Image }} style={styles.capturedImage} />
            )} */}
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="Tyre 2 Serial Number"
              placeholderTextColor="#ccc"
              onChangeText={(value) => handleVehicleDetailsChange('tyre2SerialNumber', value)}
              value={vehicleDetails.tyre2SerialNumber}
            />
            <TouchableOpacity style={styles.button} onPress={() => handleCameraOpen('tyre2Image')}>
              <Text style={styles.buttonText}>Take Tyre 2 Photo</Text>
            </TouchableOpacity>
            {/* {isCameraOpen && (
              <Camera style={styles.camera} type={cameraType} ref={cameraRef}>
                <View style={styles.cameraControls}>
                  <Button title="Capture" onPress={() => handleCapture('tyre2Image')} />
                  <Button title="Close" onPress={handleCameraClose} />
                </View>
              </Camera>
            )}
            {capturedImages.tyre2Image && (
              <Image source={{ uri: capturedImages.tyre2Image }} style={styles.capturedImage} />
            )} */}
          </View>
        </>
          
        )}
      </View>

      {/* Optional Details */}
      <View>
        <Text style={styles.sectionHeader}>Optional Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Invoice Number"
          placeholderTextColor="#ccc"
          onChangeText={(value) => handleOptionalDetailsChange('invoiceNumber', value)}
          value={optionalDetails.invoiceNumber}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleCameraOpen('invoiceImage')}>
          <Text style={styles.buttonText}>Take Invoice Photo</Text>
        </TouchableOpacity>
        {/* {isCameraOpen && (
          <Camera style={styles.camera} type={cameraType} ref={cameraRef}>
            <View style={styles.cameraControls}>
              <Button title="Capture" onPress={() => handleCapture('invoiceImage')} />
              <Button title="Close" onPress={handleCameraClose} />
            </View>
          </Camera>
        )}
        {capturedImages.invoiceImage && (
          <Image source={{ uri: capturedImages.invoiceImage }} style={styles.capturedImage} />
        )} */}
        <TextInput
          style={styles.input}
          placeholder="Invoice Date"
          placeholderTextColor="#ccc"
          onChangeText={(value) => handleOptionalDetailsChange('invoiceDate', value)}
          value={optionalDetails.invoiceDate}
        />
        <TextInput
          style={styles.input}
          placeholder="ODO Meter (Hr / Year)"
          placeholderTextColor="#ccc"
          onChangeText={(value) => handleOptionalDetailsChange('odoMeterReading', value)}
          value={optionalDetails.odoMeterReading}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleCameraOpen('odoMeterImage')}>
          <Text style={styles.buttonText}>Take ODO Meter Photo</Text>
        </TouchableOpacity>
        {/* {isCameraOpen && (
          <Camera style={styles.camera} type={cameraType} ref={cameraRef}>
            <View style={styles.cameraControls}>
              <Button title="Capture" onPress={() => handleCapture('odoMeterImage')} />
              <Button title="Close" onPress={handleCameraClose} />
            </View>
          </Camera>
        )}
        {capturedImages.odoMeterImage && (
          <Image source={{ uri: capturedImages.odoMeterImage }} style={styles.capturedImage} />
        )} */}
      </View>

      {/* Old Tyre Details */}
      <View>
        <Text style={styles.sectionHeader}>Old Tyre Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Old Tyre Company"
          placeholderTextColor="#ccc"
          onChangeText={(value) => handleOldTyreDetailsChange('oldTyreCompany', value)}
          value={oldTyreDetails.oldTyreCompany}
        />
        <TextInput
          style={styles.input}
          placeholder="Old Tyre Brand Name"
          placeholderTextColor="#ccc"
          onChangeText={(value) => handleOldTyreDetailsChange('oldTyreBrand', value)}
          value={oldTyreDetails.oldTyreBrand}
        />
        <TextInput
          style={styles.input}
          placeholder="Old Tyre Size"
          placeholderTextColor="#ccc"
          onChangeText={(value) => handleOldTyreDetailsChange('oldTyreSize', value)}
          value={oldTyreDetails.oldTyreSize}
        />
      </View>

      {/* Terms and Conditions */}
      <View>
        <Text style={styles.sectionHeader}>Terms and Conditions</Text>
        <RadioButton.Group 
            onValueChange={(value) => setTermsAccepted(value === 'true')} 
            value={termsAccepted.toString()}
          >
          <RadioButton.Item 
              label="I accept the terms and conditions" 
              value={'true'} style={styles.radioButton} 
              labelStyle={styles.radioLabel} 
              color="#ff0000" />
        </RadioButton.Group>
      </View>

      {/* Submit Button */}
      <Button title="Submit" onPress={handleSubmit} color="#ff0000" />
    </ScrollView>
  );
};



export default WarrantyRegistrationForm;
