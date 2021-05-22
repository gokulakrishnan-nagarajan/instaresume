import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  jobTitle: '',
  selfDescription: '',
  email: '',
  mobileNumber: '',
  location: '',
  linkedText: '',
  linkedInURL: '',
  gitHubText: '',
  gitHubURL: '',
  skills: '',
  workExperience: [],
  activity: '',
  education: []
}

const detailsSlice = createSlice({
  name: 'detailsSlice',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setJobTitle: (state, action) => {
      state.jobTitle = action.payload;
    },
    setSelfDescription: (state, action) => {
      state.selfDescription = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMobileNumber: (state, action) => {
      state.mobileNumber = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setLinkedInText: (state, action) => {
      state.linkedInText = action.payload;
    },
    setLinkedInURL: (state, action) => {
      state.linkedInURL = action.payload;
    },
    setGitHubText: (state, action) => {
      state.gitHubText = action.payload;
    },
    setGitHubURL: (state, action) => {
      state.gitHubURL = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    addWorkExperience: (state, action) => {
      state.workExperience.push(action.payload);
    },
    setWorkExperience: (state, action) => {
      const { value, index, key } = action.payload;
      state.workExperience[index][key] = value;
    },
    setActivity: (state, action) => {
      state.activity = action.payload;
    },
    addEducation: (state, action) => {
      state.education.push(action.payload)
    },
    setEducation: (state, action) => {
      const { value, index, key } = action.payload;
      state.education[index][key] = value;
    },
  },
})

export const {
  setName,
  setJobTitle,
  setSelfDescription,
  setEmail,
  setMobileNumber,
  setLocation,
  setLinkedInText,
  setLinkedInURL,
  setGitHubText,
  setGitHubURL,
  setSkills,
  addWorkExperience,
  setWorkExperience,
  setActivity,
  addEducation,
  setEducation
} = detailsSlice.actions;

export const getDetails = (state) => state.details;

export default detailsSlice.reducer;