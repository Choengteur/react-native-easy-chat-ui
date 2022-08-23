import React, { PureComponent } from 'react'
import { StyleSheet, Animated } from 'react-native'
import EmojiPanel from '../emoji'
import PlusPanel from '../plus'
export default class PanelContainer extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const { panelContainerHeight, ImageComponent, panelHeight, emojiHeight, onEmojiSelected} = this.props
    return (
      <Animated.View
      >
        {
          this.props.usePlus
            ? <PlusPanel
              panelHeight={panelHeight}
              panelContainerHeight={panelContainerHeight}
              panelSource={this.props.panelSource}
              renderPanelRow={this.props.renderPanelRow}
              panelContainerStyle={this.props.panelContainerStyle}
            />
            : null
        }
        {
          this.props.useEmoji
            ? <EmojiPanel
              ImageComponent={ImageComponent}
              emojiHeight={emojiHeight}
              panelContainerHeight={panelContainerHeight}
              onPress={onEmojiSelected}
            />
            : null
        }
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    paddingTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})
