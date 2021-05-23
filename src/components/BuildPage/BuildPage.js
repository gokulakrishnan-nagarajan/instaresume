import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
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
} from '../../store/reducers/detailsSlice';
import { getDetails } from '../../store/reducers/detailsSlice';

import './BuildPage.scss';

function WorkExperience() {
  return {
    role: '',
    employer: '',
    location: '',
    startDate: '',
    endDate: '',
    desc: ''
  };
}

function Education() {
  return {
    degree: '',
    major: '',
    college: '',
    location: '',
    startDate: '',
    endDate: ''
  };
}

function BuildPage() {
  const dispatch = useDispatch();

  const { name, jobTitle, selfDescription, email, mobileNumber, location, linkedInText, linkedInURL, gitHubText, gitHubURL, skills, workExperience, activity, education } = useSelector(getDetails);

  const history = useHistory();

  useEffect(() => {
    if(workExperience.length === 0) {
      addExperienceInstance();
    }
    if(education.length === 0) {
      addEducationInstance();
    }
  }, []);

  const addExperienceInstance = () => {
    dispatch(addWorkExperience(WorkExperience()));
  };
  const addEducationInstance = () => {
    dispatch(addEducation(Education()));
  };

  // Change Handlers

  const nameChanged = (e) => {
    dispatch(setName(e.target.value));
  };
  const jobTitleChanged = (e) => {
    dispatch(setJobTitle(e.target.value));
  };
  const selfDescriptionChanged = (e) => {
    dispatch(setSelfDescription(e.target.value));
  };
  const emailChanged = (e) => {
    dispatch(setEmail(e.target.value));
  };
  const mobileNumberChanged = (e) => {
    dispatch(setMobileNumber(e.target.value));
  };
  const locationChanged = (e) => {
    dispatch(setLocation(e.target.value));
  };
  const linkedInTextChanged = (e) => {
    dispatch(setLinkedInText(e.target.value));
  };
  const linkedInURLChanged = (e) => {
    dispatch(setLinkedInURL(e.target.value));
  };
  const gitHubTextChanged = (e) => {
    dispatch(setGitHubText(e.target.value));
  };
  const gitHubURLChanged = (e) => {
    dispatch(setGitHubURL(e.target.value));
  };
  const skillsChanged = (e) => {
    dispatch(setSkills(e.target.value));
  };
  const workExperienceChanged = (e, index, key) => {
    const value = e.target.value;
    dispatch(setWorkExperience({ value, index, key }));
  };
  const activityChanged = (e) => {
    dispatch(setActivity(e.target.value));
  };
  const educationChanged = (e, index, key) => {
    const value = e.target.value;
    dispatch(setEducation({ value, index, key }));
  };

  // HTML Generators

  const workExperienceHTML = workExperience.map((item, index) => {
    return (
      <>
        <input className="section-input" value={item.role} onChange={(e) => {workExperienceChanged(e, index, 'role')}} placeholder="Role" />
        <input className="section-input" value={item.employer} onChange={(e) => {workExperienceChanged(e, index, 'employer')}} placeholder="Employer" />
        <input className="section-input" value={item.location} onChange={(e) => {workExperienceChanged(e, index, 'location')}} placeholder="Locaion" />
        <input className="section-input" value={item.startDate} onChange={(e) => {workExperienceChanged(e, index, 'startDate')}} placeholder="Start Date" />
        <input className="section-input" value={item.endDate} onChange={(e) => {workExperienceChanged(e, index, 'endDate')}} placeholder="End Date" />
        <textarea className="section-input" value={item.desc} onChange={(e) => {workExperienceChanged(e, index, 'desc')}} placeholder="Description - Item1; Item2; Item3" />
      </>
    );
  });
  const educationHTML = education.map((item, index) => {
    return (
      <>
        <input className="section-input" value={item.degree} onChange={(e) => {educationChanged(e, index, 'degree')}} placeholder="Degree" />
        <input className="section-input" value={item.major} onChange={(e) => {educationChanged(e, index, 'major')}} placeholder="Major" />
        <input className="section-input" value={item.college} onChange={(e) => {educationChanged(e, index, 'college')}} placeholder="College" />
        <input className="section-input" value={item.location} onChange={(e) => {educationChanged(e, index, 'location')}} placeholder="Locaion" />
        <input className="section-input" value={item.startDate} onChange={(e) => {educationChanged(e, index, 'startDate')}} placeholder="Start Date" />
        <input className="section-input" value={item.endDate} onChange={(e) => {educationChanged(e, index, 'endDate')}} placeholder="End Date" />
      </>
    );
  });

  // Preview HTML Generators

  let skillsFlag = false;
  const skillsArr = skills.split(';');
  const previewSkillsHTML = skillsArr.map((item, index) => {
    item = item.trim();

    if(item.length > 0) {
      skillsFlag = true;
      return <span key={index} className="preview-skill-item">{item}</span>;
    }

    return null;
  })

  let workExperienceFlag = false;
  const previewWorkExperienceHTML = workExperience.map((item, index) => {
    const keys = Object.keys(item);
    let valid = true;

    for(let i=0; i<keys.length; i++) {
      if(item[keys[i]].length === 0) {
        valid = false;
      }
    }

    const descArr = item.desc.split(';');
    const descHTML = descArr.map((item, index) => {
      item = item.trim();

      return item.length > 0 ? <div key={index} className="preview-experience-point"><span className="preview-experience-bullet">-</span> {item}</div> : null;
    });

    if(valid) {
      workExperienceFlag = true;

      return (
        <div key={index} className="preview-experience-item">
          <div className="preview-experience-title">{item.role}</div>
          <div className="preview-experience-company">{item.employer}, {item.location}</div>
          <div className="preview-experience-duration">{item.startDate} - {item.endDate}</div>
          <div className="preview-experience-points-container">
            {descHTML}
          </div>
        </div>
      )
    }

    return null;
  });

  let activityFlag = false;
  const activityArr = activity.split(';');
  const previewActivityHTML = activityArr.map((item, index) => {
    item = item.trim();

    if(item.length > 0) {
      activityFlag = true;
      return <div key={index} className="preview-training-dev-point"><span className="preview-training-dev-bullet">-</span> {item}</div>;
    }

    return null;
  });

  let educationFlag = false;
  const previewEducationHTML = education.map((item, index) => {
    const keys = Object.keys(item);
    let valid = true;

    for(let i=0; i<keys.length; i++) {
      if(item[keys[i]].length === 0) {
        valid = false;
      }
    }

    if(valid) {
      educationFlag = true;

      return (
        <div key={index} className="preview-education-content">
          <div className="preview-education-title">{item.degree} in {item.major}</div>
          <div className="preview-education-college">{item.college} - {item.location}</div>
          <div className="preview-education-duration">{item.startDate} - {item.endDate}</div>
        </div>
      )
    }

    return null;
  });

  // Router

  const build = () => {
    history.push('/print');
  };

  return (
    <div className="container flex-column">
      <div className="header flex-center z-1">Insta Resume</div>
      <div className="content flex-grow-1 flex-start-center">
        <div className="user-section z-1">
          <div className="input-section">
            <div className="section-title">Name</div>
            <input className="section-input" value={name} onChange={nameChanged} placeholder="FirstName LastName" />
          </div>
          <div className="input-section">
            <div className="section-title">Job Title</div>
            <input className="section-input" value={jobTitle} onChange={jobTitleChanged} placeholder="Ex: Front End Developer" />
          </div>
          <div className="input-section">
            <div className="section-title">Description</div>
            <textarea className="section-input" value={selfDescription} onChange={selfDescriptionChanged} placeholder="Your expereince, skill and talent" />
          </div>
          <div className="input-section">
            <div className="section-title">Contact</div>
            <input className="section-input" value={email} onChange={emailChanged} placeholder="email" />
            <input className="section-input" value={mobileNumber} onChange={mobileNumberChanged} placeholder="Mobile Number" />
            <input className="section-input" value={location} onChange={locationChanged} placeholder="Locaion" />
            <input className="section-input" value={linkedInText} onChange={linkedInTextChanged} placeholder="My LinkedIn URL" />
            <input className="section-input" value={linkedInURL} onChange={linkedInURLChanged} placeholder="https://www.linkedin.com/myURL" />
            <input className="section-input" value={gitHubText} onChange={gitHubTextChanged} placeholder="My GitHub URL" />
            <input className="section-input" value={gitHubURL} onChange={gitHubURLChanged} placeholder="https://myURL.github.io" />
          </div>
          <div className="input-section">
            <div className="section-title">Skills</div>
            <textarea className="section-input" value={skills} onChange={skillsChanged} placeholder="Ex: ReactJS; Angular 2+; Vue.js" />
          </div>
          <div className="input-section">
            <div className="section-title center-space-between">
              <span>Work Experience</span>
              <button className="add" onClick={addExperienceInstance}><i className="fa fa-plus" aria-hidden="true"></i></button>
            </div>
            {workExperienceHTML}
          </div>
          <div className="input-section">
            <div className="section-title">Other Activities</div>
            <textarea className="section-input" value={activity} onChange={activityChanged} placeholder="Ex: Activity1; Activity2; Activity3" />
          </div>
          <div className="input-section">
            <div className="section-title center-space-between">
              <span>Education</span>
              <button className="add" onClick={addEducationInstance}><i className="fa fa-plus" aria-hidden="true"></i></button>
            </div>
            {educationHTML}
          </div>
        </div>
        <div id="preview" className="preview flex-grow-1">
          <div className="preview-header flex-center">
            <div className="preview-personal-details flex-grow flex-column">
              <div className="preview-name">{name}</div>
              <div className="preview-designation">{jobTitle}</div>
              <div className="preview-career-summary">{selfDescription}</div>
            </div>
          </div>
          <div className="preview-contact-info-container flex-wrap center-center">
            {
              email ?
                <div className="preview-contact-info-item center-center">
                  <span className="preview-contact-info-icon fs-14"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                  <span className="preview-contact-info-title">{email}</span>
                </div>
              : null
            }
            {
              mobileNumber ?
                <div className="preview-contact-info-item center-center">
                  <span className="preview-contact-info-icon fs-22"><i className="fa fa-mobile" aria-hidden="true"></i></span>
                  <span className="preview-contact-info-title">{mobileNumber}</span>
                </div>
              : null
            }
            {
              location ?
                <div className="preview-contact-info-item center-center">
                  <span className="preview-contact-info-icon"><i className="fa fa-location-arrow" aria-hidden="true"></i></span>
                  <span className="preview-contact-info-title">{location}</span>
                </div>
              : null
            }
            {
              linkedInURL ?
                <div className="preview-contact-info-item center-center">
                  <span className="preview-contact-info-icon fs-14 translate-y-1"><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                  <span className="preview-contact-info-title"><a href={linkedInURL} target="_blank">{linkedInText}</a></span>
                </div>
              : null
            }
            {
              gitHubURL ?
                <div className="preview-contact-info-item center-center">
                  <span className="preview-contact-info-icon"><i className="fa fa-github" aria-hidden="true"></i></span>
                  <span className="preview-contact-info-title"><a href={gitHubURL} target="_blank">{gitHubText}</a></span>
                </div>
              : null
            }
          </div>
          {
            skillsFlag ?
              <div className="preview-section">
                <div className="preview-section-title">SKILLS</div>
                <div className="preview-section-content flex-center flex-wrap">
                  {previewSkillsHTML}
                </div>
              </div>
            : null
          }
          {
            workExperienceFlag ?
              <div className="preview-section">
                <div className="preview-section-title">WORK EXPERIENCE</div>
                <div className="preview-section-content">
                  {previewWorkExperienceHTML}
                </div>
              </div>
            : null
          }
          {
            activityFlag ?
              <div className="preview-section">
                <div className="preview-section-title">OTHER ACTIVITIES</div>
                <div className="preview-section-content">
                  {previewActivityHTML}
                </div>
              </div>
            : null
          }
          {
            educationFlag ?
              <div className="preview-section">
                <div className="preview-section-title">EDUCATION</div>
                <div className="preview-section-content">
                  {previewEducationHTML}
                </div>
              </div>
            : null
          }
        </div>
      </div>
      <div className="footer center-flex-end z-1">
        <button className="btn build" onClick={build}>Build !</button>
      </div>
    </div>
  );
}

export default BuildPage;