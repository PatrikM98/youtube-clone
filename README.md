# youtube-clone

It is a skeleton of a YouTube clone app which can be upgraded especially the UI design, because the development was focused on the backend.

Functionalities:
* List videos
* Watch a video
* Sign in/out
* Upload a video
* Watch the transcoded video

Tech Stack:
- TypeScript
- Next.js
- Express.js
- Docker
- FFmpeg
- Firebase Auth
- Firebase Functions
- Firebase Firestore
- Google Cloud Storage
- Google Cloud Pub/Sub
- Google Cloud Run

A short definition of the components:
1. Cloud Storage will store the raw and processed videos uploaded by users.
2. Pub/Sub will send messages to the video processing service.
3. Cloud Run will host a non-public video processing service. After it transcodes videos, they will be uploaded to Cloud Storage.
4. Cloud Firestore will store the metadata for the videos.
5. Cloud Run will host a Next.js app, serving as the YouTube web client.
6. The Next.js app will make API calls to Firebase Functions.
7. Firebase Functions will fetch videos from Cloud Firestore and return them.
