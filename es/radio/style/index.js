import variables from '../../style/themes/default';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: variables.icon_size_xxs,
        height: variables.icon_size_xxs * 0.8
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    radioItemRadio: {
        marginLeft: variables.h_spacing_lg,
        marginRight: variables.h_spacing_md
    },
    radioItemContent: {
        color: variables.color_text_base,
        fontSize: variables.font_size_heading
    },
    radioItemContentDisable: {
        color: variables.color_text_disabled
    }
});