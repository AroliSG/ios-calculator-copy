import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  useWindowDimensions,
  TouchableOpacity
} from 'react-native';

const k_decoder = (pressed) => {
    let buttons = [
            // site a
        'AC', '+/-', '%', '÷', 

            // site b
        7, 8, 9, '×',

            // site c
        4, 5, 6, "-", 

            // site d
        1, 2, 3, '+', 

            // site e
        0, '.', '='
    ];
    let fontsize = 35;
    let sites = { a: [], b: [], c: [], d: [], e: [] };

    for (let i = 0; i <= 50; i++) {
        switch (i) {
            case 1: case 2: case 3: case 4:
                sites.a.push (
                    <TouchableOpacity key = {buttons [i-1]} onPress = {() => pressed (buttons [i-1])} style = {[styles.button, { backgroundColor: buttons [i-1] == '÷' ? '#ff9500' : '#d4d4d2' }]}> 
                        <Text style = {{ fontSize: fontsize, color: buttons [i-1] == '÷' ? 'white' : 'black'  }}>{buttons [i-1]}</Text>
                    </TouchableOpacity>
                );
            break;
            
            case 5: case 6: case 7: case 8: 
                sites.b.push (
                    <TouchableOpacity key = {buttons [i-1]}  onPress = {() => pressed (buttons [i-1])} style = {[styles.button, { backgroundColor: buttons [i-1] == '×' ? '#ff9500' : '#505050' }]}> 
                        <Text style = {{ fontSize: fontsize }}>{buttons [i-1]}</Text>
                    </TouchableOpacity>
                );
            break;

            case 9: case 10: case 11: case 12:  
                sites.c.push (
                    <TouchableOpacity key = {buttons [i-1]}  onPress = {() => pressed (buttons [i-1])} style = {[styles.button, { backgroundColor: buttons [i-1] == '-' ? '#ff9500' : '#505050' }]}> 
                        <Text style = {{ fontSize: fontsize }}>{buttons [i-1]}</Text>
                    </TouchableOpacity>
                );
            break;

            case 13: case 14: case 15: case 16:  
                sites.d.push (
                   <TouchableOpacity key = {buttons [i-1]}  onPress = {() => pressed (buttons [i-1])} style = {[styles.button, { backgroundColor: buttons [i-1] == '+' ? '#ff9500' : '#505050' }]}> 
                        <Text style = {{ fontSize: fontsize }}>{buttons [i-1]}</Text>
                    </TouchableOpacity>
                );
            break;

            case 17: case 18: case 19:  
                sites.e.push (
                    <TouchableOpacity key = {buttons [i-1]}  onPress = {() => pressed (buttons [i-1])} style = {[styles.button, { 
                            backgroundColor: buttons [i-1] == '=' ? '#ff9500' : '#505050', 
                            width: buttons [i-1] == '0' ? 200 : 95,
                            alignItems: buttons [i-1] == '0' ? 'flex-start' : 'center',
                            paddingLeft: buttons [i-1] == '0' ? 35 : 0,
                        }]}> 

                        <Text style = {{ fontSize: fontsize }}>{buttons [i-1]}</Text>
                    </TouchableOpacity>
                );
            break;
        }
    }
    return sites; 
}
          
const App = () => {
    const typeSymbol = ['.', '+', '-', '%', '÷', '×']
    const [ mathResult, setMathResult ] = useState ('0');
    const { width, height }             = useWindowDimensions ();
    const orientation = width <= height ? 'portrait' : 'landscape';
    const items = { 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    };

    return (
        <View style = {styles.container}>
            <View style = {{ alignItems: 'flex-end', width: '100%', paddingRight: 25 }}> 
                <Text style = {{
                    fontSize: 85
                }}>{mathResult}</Text>
            </View>

                {/* buttons */}
            <View>

                    {/* site a */}
                <View style = {items}>
                    {k_decoder (value => {
                        let math = mathResult.toString ();
                        if (mathResult.startsWith (0)) math = math.slice(1);
                        setMathResult (math + value);

                        if (value == 'AC') setMathResult ('0');
                    }).a}
                </View>

                    {/* site b */}
                <View style = {items}>
                    {k_decoder (value => {
                        let math = mathResult.toString ();
                        if (mathResult.startsWith (0)) math = math.slice(1);
                        setMathResult (math + value);
                    }).b}
                </View>
                    
                    {/* site c */}
                <View style = {items}>
                    {k_decoder (value => {
                        let math = mathResult.toString ();
                        if (mathResult.startsWith (0)) math = math.slice(1);
                        setMathResult (math + value);
                    }).c}
                </View>    
                    
                    {/* site d */}
                <View style = {items}>
                    {k_decoder (value => {
                        let math = mathResult.toString ();
                        if (mathResult.startsWith (0)) math = math.slice(1);
                        setMathResult (math + value);
                    }).d}
                </View>  

                    {/* site e */}
                <View style = {items}>
                    {k_decoder (value => {
                        if (mathResult.startsWith ('=')) return;
                        if (mathResult.startsWith (0)) return;
  
                        setMathResult (mathResult.toString () + value);
                    }).e}
                </View>  
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        justifyContent: 'flex-end'
    },
    button: {
        width: 90,
        height: 90,
        margin: 5, 
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outputScreen: { 
        height: '95%', 
        width: '90%', 
        backgroundColor: 'black' 
    }
});

export default App;
