import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { splashStyles } from '@/styles/splashStyles'
import { resetAndNavigate } from '@/utils/LibraryHelpers';

export default function index() {



useEffect(() => {

setTimeout(() => {
  resetAndNavigate('/(auth)/signin')
}, 300);

}, [])


  return (
    <View style={splashStyles.container}>
     <Image style={splashStyles.logo} source={require("@/assets/images/adaptive-icon.png")} />
    </View>
  )
}

const styles = StyleSheet.create({})