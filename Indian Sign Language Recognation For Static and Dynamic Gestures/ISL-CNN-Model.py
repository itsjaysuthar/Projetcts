# Importing all the libraries
from keras.models import Sequential
from keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout

# Initialising the CNN
classifier = Sequential()

# Step 1 - Convolution
classifier.add(Conv2D(16, kernel_size=3, activation='relu', input_shape=(110, 110, 1)))

# Step 2 - Max Pooling
classifier.add(MaxPooling2D(pool_size = (2,2)))

# Adding extra convolution layers
classifier.add(Conv2D(16, kernel_size=3, activation='relu'))
classifier.add(MaxPooling2D(pool_size = (2,2)))
#classifier.add(Conv2D(256, kernel_size=2, activation='relu'))
#classifier.add(MaxPooling2D(pool_size = (2,2)))

# Step 3 - Flatten
classifier.add(Flatten())

# Step 4 - Fully Connected Layer
classifier.add(Dense(128, activation='relu'))
classifier.add(Dropout(0.3))
classifier.add(Dense(36, activation='softmax'))

# Compile the Model
classifier.compile(optimizer='rmsprop', loss='categorical_crossentropy', metrics=['accuracy'])

# Keras Image Preprocessing
from keras.preprocessing.image import ImageDataGenerator
train_datagen = ImageDataGenerator(rescale=1./255)

#test_datagen = ImageDataGenerator(rescale=1./255)

train_generator = train_datagen.flow_from_directory(
        'ISL Gestures DataSet',
        target_size=(110, 110),
        batch_size=1,
        color_mode='grayscale',
        class_mode='categorical')

#validation_generator = test_datagen.flow_from_directory(
#        'data/validation',
#        target_size=(150, 150),
#        batch_size=32,
#        class_mode='binary')

classifier.fit_generator(
        train_generator,
        steps_per_epoch=7920,
        epochs=5)

# Save the Model
import joblib
joblib.dump(classifier, 'ISL-CNN-Model')