import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function AuthLayout() {
  return (
  <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen  name='signin'/>
    <Stack.Screen  name='singup'/>
  </Stack>
  )
}

const styles = StyleSheet.create({})