all:
  yarn
  cd ios
  pod install 
  cd ..
  react-native run-ios

open:
  open ios/ReactNativeToDo.xcworkspace
