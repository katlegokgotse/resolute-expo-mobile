import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExternalLink, Github, Globe } from 'lucide-react-native';

export default function AboutScreen() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>About MindAR</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What is MindAR?</Text>
          <Text style={styles.sectionText}>
            MindAR is a web augmented reality library developed by Hiukim. It provides capabilities for image tracking and face tracking, allowing developers to create AR experiences that run directly in web browsers without requiring any app installation.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Prerequisites</Text>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>• Modern web browser with WebGL and WebRTC support</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>• Camera access permission</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>• For mobile: iOS 13+ (Safari) or Android with Chrome/Firefox</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Installation Methods</Text>
          <View style={styles.codeBlock}>
            <Text style={styles.codeTitle}>NPM Installation</Text>
            <Text style={styles.code}>npm install mind-ar-js</Text>
          </View>
          
          <View style={styles.codeBlock}>
            <Text style={styles.codeTitle}>CDN Usage</Text>
            <Text style={styles.code}>{`<script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.3/dist/mindar-image.prod.js"></script>`}</Text>
            <Text style={styles.code}>{`<script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.3/dist/mindar-image-aframe.prod.js"></script>`}</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Project Structure</Text>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>• HTML file with A-Frame and MindAR scripts</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>• Target images (.mind compiled format)</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>• 3D models and assets</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>• Custom JavaScript for interactions</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Configuration Options</Text>
          <View style={styles.codeBlock}>
            <Text style={styles.codeTitle}>MindAR Image Tracking Options</Text>
            <Text style={styles.code}>{`mindar-image="imageTargetSrc: ./targets.mind; autoStart: true; maxTrack: 2"`}</Text>
          </View>
          
          <View style={styles.configItem}>
            <Text style={styles.configName}>imageTargetSrc</Text>
            <Text style={styles.configDesc}>Path to the .mind target file</Text>
          </View>
          <View style={styles.configItem}>
            <Text style={styles.configName}>autoStart</Text>
            <Text style={styles.configDesc}>Whether to start tracking automatically</Text>
          </View>
          <View style={styles.configItem}>
            <Text style={styles.configName}>maxTrack</Text>
            <Text style={styles.configDesc}>Maximum number of targets to track simultaneously</Text>
          </View>
          <View style={styles.configItem}>
            <Text style={styles.configName}>uiLoading</Text>
            <Text style={styles.configDesc}>Show loading screen</Text>
          </View>
          <View style={styles.configItem}>
            <Text style={styles.configName}>uiScanning</Text>
            <Text style={styles.configDesc}>Show scanning screen</Text>
          </View>
          <View style={styles.configItem}>
            <Text style={styles.configName}>uiError</Text>
            <Text style={styles.configDesc}>Show error screen</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Testing Instructions</Text>
          <Text style={styles.sectionText}>
            For the best experience, test on actual devices rather than emulators:
          </Text>
          
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>• Desktop: Use Chrome or Firefox with webcam access</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>• iOS: Use Safari (iOS 13+)</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>• Android: Use Chrome or Firefox</Text>
          </View>
          
          <Text style={styles.sectionText} style={{marginTop: 12}}>
            When testing, ensure good lighting conditions and print the target image or display it on another screen.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resources</Text>
          
          <TouchableOpacity 
            style={styles.linkButton}
            onPress={() => openLink('https://hiukim.github.io/mind-ar-js-doc/')}
          >
            <Globe size={20} color="#007AFF" />
            <Text style={styles.linkText}>Official Documentation</Text>
            <ExternalLink size={16} color="#8E8E93" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.linkButton}
            onPress={() => openLink('https://github.com/hiukim/mind-ar-js')}
          >
            <Github size={20} color="#007AFF" />
            <Text style={styles.linkText}>GitHub Repository</Text>
            <ExternalLink size={16} color="#8E8E93" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.linkButton}
            onPress={() => openLink('https://hiukim.github.io/mind-ar-js-doc/examples/basic-examples')}
          >
            <ExternalLink size={20} color="#007AFF" />
            <Text style={styles.linkText}>Example Projects</Text>
            <ExternalLink size={16} color="#8E8E93" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1C1C1E',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#3A3A3C',
  },
  listItem: {
    marginBottom: 8,
  },
  listItemText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#3A3A3C',
  },
  codeBlock: {
    backgroundColor: '#F2F2F7',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  codeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8E8E93',
    marginBottom: 8,
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#007AFF',
    marginBottom: 4,
  },
  configItem: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  configName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1E',
    width: 120,
  },
  configDesc: {
    fontSize: 16,
    color: '#3A3A3C',
    flex: 1,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  linkText: {
    fontSize: 16,
    color: '#007AFF',
    flex: 1,
    marginLeft: 12,
  },
});