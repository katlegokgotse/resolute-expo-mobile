import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import ARWebView from './ARWebView';

// Basic MindAR image tracking example
const createMindARHTML = (targetImage: string, modelSrc: string) => `
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>MindAR Image Tracking</title>
    <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      .example-container {
        overflow: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
      }
      #loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9999;
        color: white;
        font-family: Arial, sans-serif;
      }
    </style>
    
    <!-- Import A-Frame and MindAR -->
    <script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.3/dist/mindar-image.prod.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.3/dist/mindar-image-aframe.prod.js"></script>
  </head>
  <body>
    <div id="loading">Loading AR Experience...</div>
    
    <div class="example-container">
      <a-scene
        mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.3/examples/image-tracking/assets/card-example/card.mind; autoStart: true; uiLoading: false; uiError: false; uiScanning: false;"
        color-space="sRGB"
        embedded
        renderer="colorManagement: true, physicallyCorrectLights: true"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
      >
        <a-assets>
          <img id="card" src="${targetImage}" />
          <a-asset-item id="avatarModel" src="${modelSrc}"></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

        <a-entity mindar-image-target="targetIndex: 0">
          <a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
          <a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.005 0.005 0.005" src="#avatarModel" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"></a-gltf-model>
        </a-entity>
      </a-scene>
    </div>

    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const sceneEl = document.querySelector('a-scene');
        const loadingEl = document.getElementById('loading');
        
        if (sceneEl) {
          sceneEl.addEventListener('loaded', function () {
            loadingEl.style.display = 'none';
          });
          
          sceneEl.addEventListener('arError', function(event) {
            loadingEl.innerText = 'AR Error: ' + event.detail.error;
          });
        }
      });
    </script>
  </body>
</html>
`;

interface ARExperienceProps {
  targetImage?: string;
  modelSrc?: string;
}

const ARExperience: React.FC<ARExperienceProps> = ({ 
  targetImage = 'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.3/examples/image-tracking/assets/card-example/card.png',
  modelSrc = 'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.3/examples/image-tracking/assets/card-example/softmind/scene.gltf'
}) => {
  const htmlContent = createMindARHTML(targetImage, modelSrc);

  if (Platform.OS !== 'web') {
    return (
      <View style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>Platform Not Supported</Text>
          <Text style={styles.errorText}>
            MindAR is currently only supported on web platforms. Please open this app in a web browser to experience the AR features.
          </Text>
        </View>
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionText}>
            This is what you would see in a web browser:
          </Text>
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: targetImage }} 
              style={styles.targetImage}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ARWebView htmlContent={htmlContent} />
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>
          Point your camera at this image to see AR content:
        </Text>
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: targetImage }} 
            style={styles.targetImage}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF3B30',
    marginBottom: 16,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#3A3A3C',
    lineHeight: 24,
  },
  instructionContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
  },
  instructionText: {
    fontSize: 16,
    color: '#3A3A3C',
    marginBottom: 12,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  targetImage: {
    width: 200,
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
});

export default ARExperience;