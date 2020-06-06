import React from 'react';
import logo from './logo.svg';
import './App.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ComponentReactNative = () => {
  const codeString = `
  import RNInsider from 'react-native-insider';
  class App extends Component {
    componentDidMount() {
      // null should be your callback method in order to handle deeplinks and actions. 
      //Please visit Insider Methods > Insider Callbacks for more information and example implementation.
      RNInsider.init('partnername', 'your_app_group', null);
      
      // This is an utility method, 
      //if you want to handle the push permission in iOS on your own you can omit the following method.
      RNInsider.registerWithQuietPermission(false);
      }
    }`;
  return (
    <SyntaxHighlighter className="shl" language="dart" style={atomOneDark}>
      {codeString}
    </SyntaxHighlighter>
  );
};
const ComponentForFlutter = () =>{
  const codeString = `
  @override
void initState() {
  super.initState();
  initInsider();
}

Future initInsider() async {
  if (!mounted) return;
    
  // Call in async method.
  await FlutterInsider.Instance.init("partnername","appgroup", callback);

  // This is an utility method, 
  //if you want to handle the push permission in iOS own your own you can omit the following method.
  FlutterInsider.Instance.registerWithQuietPermission(false);    
}

void callback(){

}
  `;
  return (
    <SyntaxHighlighter className="shl" language="jsx" style={atomOneDark}>
      {codeString}
    </SyntaxHighlighter>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>For React Native</div>
        <ComponentReactNative/>
        <div>For Dart</div>
        <ComponentForFlutter/>
      </header>
    </div>
  );
}

export default App;
