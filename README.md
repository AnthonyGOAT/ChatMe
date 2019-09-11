# ChatMe
This is my first app that I created using React and Firebase

I was inspired to create this chat app when I learned about React. With my experience in Firebase and some coding practive in Java Script,
I think it would be a great idea to create a realtime database chat app, something that I've always wanted to build since high school.

The app is not so responsive and beautiful... I will defnitely make some big improvements soon but it could perform the basic
required task to send and receive the message. Users can also create a new account and logout, as well as change their name.

In order to run the app, you need to clone(download) it and install the necessary dependencies



You need to install homebrew by running this line:

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

----------------------------------------------------------------------------------------------------

Use brew to install these dependencies:

brew install yarn
brew install node
brew install watchman
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8

----------------------------------------------------------------------------------------------------

Node comes with npm, which lets you install the React Native command line interface.

Run the following command in a Terminal:

npm install -g react-native-cli

----------------------------------------------------------------------------------------------------

You then need to rebuild the project to reinstall node_modules by run this line in terminal:

npm install

or

npm rebuild

-----------------------------------------------------------------------------------------------------

After you have installed all of the dependencies, you are ready to run the project by:

cd ChatMe
react-native run-ios
