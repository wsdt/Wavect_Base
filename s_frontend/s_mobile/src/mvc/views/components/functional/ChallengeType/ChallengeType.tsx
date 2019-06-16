import React from 'react';
import {TouchableOpacity} from "react-native";
import styles from "../ChallengeLayerBar/ChallengeLayerBar.css";
import {Image} from "react-native-elements";

export const ChallengeType: React.FunctionComponent<any> = props => {
    return (
        <TouchableOpacity style={styles.topRightSymbol}>
            <Image source={{
                uri:
                    'https://aboutreact.com/wp-content/uploads/2018/08/google-plus.png',
            }} />

        </TouchableOpacity>
    );
}

export default ChallengeType;