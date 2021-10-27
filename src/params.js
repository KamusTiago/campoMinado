import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    bordeSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // PROPORÇÃO DO PAINEL SUPERIOR NA TELA
    difficultLevel: 0.1,
    getColumnsAmount(){
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize) // FLOOR ARREDONDA PARA BAIXO
    },
    getRowsAmount(){
        const totalHeight = Dimensions.get('window').height
        const boardHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blockSize)
    }
}

export default params