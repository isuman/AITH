import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableHighlight,
    AppRegistry
} from 'react-native';
var timeLimit = 60;
var timer = null;
var Monkey = React.createClass({
    render() {
        return (
            <TouchableHighlight style={styles.touch}
                onPress={this.props.onPress}>
                <Text style={styles.monkey}>{this.props.show ? '🙈' : ''}</Text>
            </TouchableHighlight >
        )
    }
})
export default class AITH extends Component {
    constructor() {
        super();
        this.state = {
            highScore: 0,
            timeCount: 0,
            score: 0,
            playing: false,
            picicon: [false, false, false, false, false, false, false, false, false],
        }
    }
    _startGame() {
        this.setState({
            timeCount: timeLimit,
            playing: true,
            score: 0,
        });
        monkey = setInterval(() => {
            var currentPics = this.state.picicon;
            currentPics[Math.floor(Math.random() * 9)] = true;
            if (!Math.floor(Math.random() * 2)) {
                currentPics = [false, false, false, false, false, false, false, false, false]
            }
            this.setState({
                picicon: currentPics,
            })
            if (!this.state.playing) {
                clearInterval(monkey);
                this.setState({
                    picicon: [false, false, false, false, false, false, false, false, false]
                })
            }
        }, 500);
        timer = setInterval(() => {
            this.setState({
                timeCount: this.state.timeCount - 1,
            });
            if (this.state.timeCount == 0) {
                this._stopGame();
            }
        }, 1000);
    }
    _stopGame() {
        clearInterval(timer);
        this.setState({
            playing: false,
            highScore: (this.state.score > this.state.highScore) ? this.state.score : this.state.highScore,
        })
    }
    _handleTouch(picNumber) {
        if (this.state.picicon[picNumber]) {
            this.setState({
                score: this.state.score + 1,
            })
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.scoreRow}>
                    <View style={styles.scoreBoard}>
                        <Text style={styles.textHeader}>High Score</Text>
                        <Text style={styles.textNumber}>{this.state.highScore}</Text>
                    </View>
                    <View style={styles.scoreBoard}>
                        <Text style={styles.textHeader}>Time</Text>
                        <Text style={styles.textNumber}>{this.state.timeCount}</Text>
                    </View>
                    <View style={styles.scoreBoard}>
                        <Text style={styles.textHeader}>Score</Text>
                        <Text style={styles.textNumber}>{this.state.score}</Text>
                    </View>
                </View>

                <View style={styles.picsRow}>
                    <View style={styles.picicon}>
                        <Monkey show={this.state.picicon[0]}
                            onPress={() => this._handleTouch(0)} />
                    </View>
                    <View style={styles.picicon}>
                        <Monkey show={this.state.picicon[1]}
                            onPress={() => this._handleTouch(1)} />
                    </View>
                    <View style={styles.picicon}>
                        <Monkey show={this.state.picicon[2]}
                            onPress={() => this._handleTouch(2)} />
                    </View>
                </View>
                <View style={styles.picsRow}>
                    <View style={styles.picicon}>
                        <Monkey show={this.state.picicon[3]}
                            onPress={() => this._handleTouch(3)} />
                    </View>
                    <View style={styles.picicon}>
                        <Monkey show={this.state.picicon[4]}
                            onPress={() => this._handleTouch(4)} />
                    </View>
                    <View style={styles.picicon}>
                        <Monkey show={this.state.picicon[5]}
                            onPress={() => this._handleTouch(5)} />
                    </View>
                </View>
                <View style={styles.picsRow}>
                    <View style={styles.picicon}>
                        <Monkey show={this.state.picicon[6]}
                            onPress={() => this._handleTouch(6)} />
                    </View>
                    <View style={styles.picicon}>
                        <Monkey show={this.state.picicon[7]}
                            onPress={() => this._handleTouch(7)} />
                    </View>
                    <View style={styles.picicon}>
                        <Monkey show={this.state.picicon[8]}
                            onPress={() => this._handleTouch(8)} />
                    </View>
                </View>
                <View style={styles.button}>
                    <View style={styles.buttonRow}>
                        <Button
                            title="Start Game"
                            color="#7c00ff"
                            onPress={this._startGame.bind(this)}
                            disabled={this.state.playing} />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    scoreRow: {
        flex: 1,
        flexDirection: 'row',
    },
    scoreBoard: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
    },
    picsRow: {
        backgroundColor: '#98f9ed',
        flex: 2,
        flexDirection: 'row',
    },
    buttonRow: {
        flex: 1,
    },
    button: {
        flexDirection: 'row',
    }
    ,
    picicon: {
        borderWidth: 2,
        borderColor: '#8A2BE2',
        flex: 2,
        backgroundColor: '#E8F8F5',
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    monkey: {
        fontSize: 50,

    },
    touch: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeader: {
        color: '#ff0088',
        fontWeight: 'bold',
        fontSize: 15
    },
    textNumber: {
        color: '#9f00f6',
        fontWeight: 'bold',
        fontSize: 30
    }
});

AppRegistry.registerComponent('AITH', () => AITH);