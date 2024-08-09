import { ImageBackground, StyleSheet, View } from "react-native"

const yoko_img = {uri : 'https://marvel-b1-cdn.bc0a.com/f00000000270535/s19532.pcdn.co/wp-content/uploads/2021/01/YOHTA-logo.jpg'}

const style = StyleSheet.create({
    container : {
        height : 100,
        backgroundColor : 'red'
    }
})

const Header = () => {
    return (
        <View style = {style.container}>
            <ImageBackground source={yoko_img} resizeMode="cover">
                <View style = {{height : 100}}>

                </View>
            </ImageBackground>
        </View>
    );
}

export default Header;