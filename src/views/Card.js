/* @flow */

import React from 'react';

import { Animated, StyleSheet } from 'react-native';

import createPointerEventsContainer from './PointerEventsContainer';

import type { NavigationSceneRendererProps } from '../TypeDefinition';

type Props = NavigationSceneRendererProps & {
  children: React.Children<*>,
  onComponentRef: (ref: any) => void,
  pointerEvents: string,
  style: any,
};

/**
 * Component that renders the scene as card for the <NavigationCardStack />.
 */
class Card extends React.Component<any, Props, any> {
  props: Props;

  render() {
    const { isActive, children, pointerEvents, style, options, screenProps, scene } = this.props;
    
    return (
      <Animated.View
        pointerEvents={pointerEvents}
        ref={this.props.onComponentRef}
        style={[styles.main, style]}
        importantForAccessibility={scene.isActive ? 'yes' : 'no-hide-descendants'}
      >
        {children}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    top: 0,
  },
});

Card = createPointerEventsContainer(Card);

export default Card;
