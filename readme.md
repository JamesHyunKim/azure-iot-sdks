# Microsoft Azure IoT SDKs

This repository contains both IoT device SDKs and IoT service SDKs. Device SDKs enable you connect client devices to Azure IoT Hub. Service SDKs enable you to manage your IoT Hub service instance.

Visit http://azure.com/iotdev to learn more about developing applications for Azure IoT.


## Microsoft Azure IoT device SDKs

The Microsoft Azure IoT device SDKs contain code that facilitate building devices and applications that connect to and are managed by Azure IoT Hub services.

Devices and data sources in an IoT solution can range from a simple network-connected sensor to a powerful, standalone computing device. Devices may have limited processing capability, memory, communication bandwidth, and communication protocol support. The IoT device SDKs enable you to implement client applications for a wide variety of devices.

This repository contains the following IoT device SDKs:

- [Azure IoT device SDK for C](c/readme.md)
- [Azure IoT device SDK for Node.js](node/device/core/readme.md)
- [Azure IoT device SDK for Java](java/device/readme.md)
- [Azure IoT device SDK for .NET](csharp/device/readme.md)

Each language SDK includes sample code and documentation in addition to the library code. The API reference documentation is [here](http://azure.github.io/azure-iot-sdks).

### OS platforms and hardware compatibility

Azure IoT device SDKs can be used with a broad range of OS platforms and devices. See [OS Platforms and hardware compatibility](https://azure.microsoft.com/documentation/articles/iot-hub-tested-configurations/).

## Microsoft Azure IoT service SDKs

The Azure IoT Service SDKs help you to build applications that interact with your devices and manage device identities in your IoT hub.

- [Azure IoT service SDK for .Net](csharp/service/README.md)
- [Azure IoT service SDK for Node.js](node/service/README.md)
- [Azure IoT service SDK for Java](java/service/readme.md)

## Samples

Whithin the repository, you can find various types of simple samples that can help you get started.
Below is a complete list of all these simple samples.
In addition to these simple samples, you can find a long list of [getting started guides](doc/get_started) that describe all the steps necessary to run the simple samples on a wide variety of devices and platforms.
And if you are looking for end to end samples that show how to do simple analytics and processing of the data generated by your device using Azure services such as Stream Analytics, Big Data, Machine Learning and others, check out our [E2E samples gallery](http://aka.ms/azureiotsamples).

- C device SDK:
   - [Simple sample using AMQP](c/serializer/samples/simplesample_amqp): shows how to connect to IoT Hub and send and receive serialized messages using the AMQP protocol and the serializer utility.
   - [Simple sample using HTTP](c/serializer/samples/simplesample_http): shows how to connect to IoT Hub and send and receive serialized messages using the HTTP protocol and the serializer utility.
   - [Simple sample using MQTT](c/serializer/samples/simplesample_mqtt): shows how to connect to IoT Hub and send and receive serialized messages using the MQTT protocol and the serializer utility.
   - [Temperature sensor anomaly sample](c/serializer/samples/temp_sensor_anomaly): shows a simple application that sends temperature data to IoT Hub and receives alarms, using real data when running on an MBED board and simulated data when run on Windows.
   - [Azure IoT Suite Remote Monitoring device sample](c/serializer/samples/remote_monitoring): shows how to connect a device to an Azure IoT Suite Remote Monitoring preconfigured solution.
- C# device SDK:
   - [Simple .Net sample using AMQP](csharp/device/samples/DeviceClientAmqpSample): Shows how to connect to IoT Hub and send and receive raw messages using the AMQP protocol.
   - [Simple .Net sample using HTTP](csharp/device/samples/DeviceClientHttpSample): Shows how to connect to IoT Hub and send and receive raw messages using the HTTP protocol.
   - [Simple .Net sample using MQTT](csharp/device/samples/DeviceClientMqttSample): Shows how to connect to IoT Hub and send and receive raw messages using the MQTT protocol.
   - [Simple UWP C++ sample](csharp/device/samples/CppUWPSample): Shows how to connect to IoT Hub and send and receive raw messages in a C++ UWP application.
   - [Simple UWP JS sample](csharp/device/samples/JSSample): Shows how to connect to IoT Hub and send and receive raw messages in a JavaScript UWP application.
   - [Simple UWP C# sample](csharp/device/samples/UWPSample): Shows how to connect to IoT Hub and send and receive raw messages in a C# UWP application.
   - [Simple .Net Micro Framework 4.3 sample](csharp/device/samples/NETMFDeviceClientHttpSample_43): Shows how to connect to IoT Hub and send and receive raw messages from a device running .Net Micro Framework 4.3.
   - [Simple .Net Micro Framework 4.2 sample](csharp/device/samples/NETMFDeviceClientHttpSample_42): Shows how to connect to IoT Hub and send and receive raw messages from a device running .Net Micro Framework 4.2.
- Java device SDK:
   - [Simple send sample](java/device/samples/send-event): Shows how to connect and send messages to IoT Hub, passing the protocol of your choices as a parameter.
   - [Simple send/receive sample](java/device/samples/send-receive-event): Shows how to connect then send and receive messages to and from IoT Hub, passing the protocol of your choices as a parameter.
   - [Simple send serialized messages sample](java/device/samples/send-serialized-event): Shows how to connect and send serialized messages to IoT Hub, passing the protocol of your choices as a parameter.
   - [Simple sample handling messages received](java/device/samples/handle-messages): : Shows how to connect to IoT Hub and manage messages received from IoT Hub, passing the protocol of your choices as a parameter.
- Java service SDK:
   - [Device manager sample](java/service/samples/device-manager): Shows how to work with the device ID registry of IoT Hub. 
   - [Service client sample](java/service/samples/device-manager): Shows how to send Cloud to Device messages through IoT Hub. 
- Node device SDK:
   - [Simple device sample](node/device/samples/simple_sample_device.js): Shows how to connect to IoT Hub and send and receive messages using Node.js on a device.
   - [Send batch](node/device/samples/send_batch_http.js): Shows how to connect to IoT Hub and send a batch of messages using Node.js on a device.
   - [Azure IoT Suite Remote Monitoring device sample](node/device/samples/remote_monitoring.js): Shows how to connect a device runnig Node.js to an Azure IoT Suite remote Monitoring preconfigured solution.
- Node service SDK:
   - [Registry manager simple sample](node/service/samples/registry_sample.js): Shows how to manage the device ID registry of IoT Hub from a Node.js application.
   - [Bulk Registry sample](node/service/samples/registry_sample.js): Shows how to create a set of device IDs in the device ID registry of IoT Hub in bulk from a Node.js application.
   - [Simple Cloud to Device messaging sample](node/service/samples/send_c2d_message.js) : Shows how to send messages to a device from a Node.js application through IoT Hub.

## Contribution, feedback and issues

If you would like to become an active contributor to this project please follow the instructions provided in the [contribution guidelines](contribute.md).
If you encounter any bugs or have suggestions for new features, please file an issue in the [Issues](https://github.com/Azure/azure-iot-sdks/issues) section of the project.

## Support

If you are having issues using one of the packages or using the Azure IoT Hub service that go beyond simple bug fixes or help requests that would be dealt within the issues section of this project, the Microsoft Customer Support team will try and help out on a best effort basis.
To engage Microsoft support, you can create a support ticket directly from the [Azure portal](https://ms.portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade).
Escalated support requests for Azure IoT Hub SDKs development questions will only be available Monday thru Friday during normal coverage hours of 6 a.m. to 6 p.m. PST.
Here is what you can expect Microsoft Support to be able to help with:
* **Client SDKs issues**: If you are trying to compile and run the libraries on a supported platform, the Support team will be able to assist with troubleshooting or questions related to compiler issues and communications to and from the IoT Hub.  They will also try to assist with questions related to porting to an unsupported platform, but will be limited in how much assistance can be provided.  The team will be limited with trouble-shooting the hardware device itself or drivers and or specific properties on that device. 
* **IoT Hub / Connectivity Issues**: Communication from the device client to the Azure IoT Hub service and communication from the Azure IoT Hub service to the client.  Or any other issues specifically related to the Azure IoT Hub.
* **Portal Issues**: Issues related to the portal, that includes access, security, dashboard, devices, Alarms, Usage, Settings and Actions.
* **REST/API Issues**: Using the IoT Hub REST/APIs that are documented in the [documentation]( https://msdn.microsoft.com/library/mt548492.aspx).

## Additional resources

In addition to the language SDKs, this repository ([azure-iot-sdks](https://github.com/Azure/azure-iot-sdks)) contains the following folders:

### /build

This folder contains various build scripts to build the libraries.

### /doc

This folder contains the following documents that are relevant to all the language SDKs:

- [Set up IoT Hub](doc/setup_iothub.md) describes how to configure your Azure IoT Hub service.
- [Manage IoT Hub](doc/manage_iot_hub.md) describes how to provision devices in your Azure IoT Hub service.
- [FAQ](doc/faq.md) contains frequently asked questions about the SDKs and libraries.
- [OS Platforms and hardware compatibility](https://azure.microsoft.com/documentation/articles/iot-hub-tested-configurations/) describes the SDK compatibility with different OS platforms as well as specific device configurations.

### /tools

This folder contains tools you will find useful when you are working with IoT Hub and the device SDKs.
- [iothub-explorer](tools/iothub-explorer/readme.md): describes how to use the iothub-explorer node.js tool to provision a device for use in IoT Hub, monitor the messages from the device, and send commands to the device.
- [Device Explorer](tools/DeviceExplorer/readme.md): this tool enables you to perform operations such as manage the devices registered to an IoT hub, view device-to-cloud messages sent to an IoT hub, and send cloud-to-device messages from an IoT hub. Note this tool only runs on Windows.
