import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  // OAuthProvider,
  // onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { firebase_auth } from "./firebase";

interface Inputs {
  email: string;
  password: string;
  displayName?: string;
}

const google_provider = new GoogleAuthProvider();
const facebook_provider = new FacebookAuthProvider();

export type ProviderType = "facebook" | "google";

const provider = {
  google: google_provider,
  facebook: facebook_provider,
};
//login with provider of google and facebook
export const sing_in = async (type_provider: ProviderType) => {
  try {
    const resp = await signInWithPopup(firebase_auth, provider[type_provider]);
    const { displayName, email, photoURL, uid } = resp.user;

    const id_token = await resp.user.getIdToken();
    const providerId = resp.user.providerData[0].providerId as any;

    const user = {
      id: uid,
      id_token,
      providerId,
      firstname: displayName,
      email,
      avatar: photoURL,
    };

    return { user };
  } catch (e) {
    return { error: (e as Error).message };
  }
};

export const sign_in_with_credentials = async ({
  email,
  password,
}: Omit<Inputs, "displayName">) => {
  try {
    const resp = await signInWithEmailAndPassword(firebase_auth, email, password);
    const id_token = await resp.user.getIdToken();

    const user = {
      uid: resp.user.uid,
      id_token,
      providerId: resp.user.providerData[0].providerId,
    };
    console.log(user);
    return { user };
  } catch (e) {
    console.log(e);
    return { error: (e as Error).message };
  }
};

export const sign_up_with_credentials = async ({ email, password, displayName }: Inputs) => {
  try {
    const resp = await createUserWithEmailAndPassword(firebase_auth, email, password);
    const [id_token] = await Promise.all([
      await resp.user.getIdToken(),
      updateProfile(firebase_auth.currentUser!, { displayName }),
    ]);

    const user = {
      id: resp.user.uid,
      firstName: displayName,
      email,
      providerId: resp.user.providerData[0].providerId,
      id_token,
    };

    return { user };
  } catch (e) {
    return { error: (e as Error).message };
  }
};

export const set_new_password = async (new_password: string) => {
  const user = firebase_auth.currentUser;
  if (!user) return false;

  try {
    await updatePassword(user, new_password);
    return true;
  } catch (error) {
    return false;
  }
};

export const logout_firebase = async () => await firebase_auth.signOut();
