import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getDetails } from '../../store/reducers/detailsSlice';

import '../BuildPage/BuildPage.scss';

function PrintPage() {
  const { name, jobTitle, selfDescription, email, mobileNumber, location, linkedInText, linkedInURL, gitHubText, gitHubURL, skills, workExperience, activity, education } = useSelector(getDetails);

  useEffect(() => {
    window.print();
  }, []);

  // Skills

  const skillsArr = skills.split(';');
  const previewSkillsHTML = skillsArr.map((item, index) => {
    item = item.trim();

    return item.length > 0 ? <span key={index} className="preview-skill-item">{item}</span> : null
  })

  // Work Experience

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

    return (
      valid ?
        <div key={index} className="preview-experience-item">
          <div className="preview-experience-title">{item.role}</div>
          <div className="preview-experience-company">{item.employer}, {item.location}</div>
          <div className="preview-experience-duration">{item.startDate} - {item.endDate}</div>
          <div className="preview-experience-points-container">
            {descHTML}
          </div>
        </div>
      : null
    )
  });

  // Activity

  const activityArr = activity.split(';');
  const previewActivityHTML = activityArr.map((item, index) => {
    item = item.trim();

    return item.length > 0 ? <div key={index} class="preview-training-dev-point"><span class="preview-training-dev-bullet">-</span> {item}</div> : null;
  });

  // Education

  const previewEducationHTML = education.map((item, index) => {
    const keys = Object.keys(item);
    let valid = true;

    for(let i=0; i<keys.length; i++) {
      if(item[keys[i]].length === 0) {
        valid = false;
      }
    }

    return (
      valid ?
        <div key={index} class="preview-education-content">
          <div class="preview-education-title">{item.degree} in {item.major}</div>
          <div class="preview-education-college">{item.college} - {item.location}</div>
          <div class="preview-education-duration">{item.startDate} - {item.endDate}</div>
        </div>
      : null
    )
  });

  return (
    <div>
      <div id="preview" className="preview">
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
            linkedInText && linkedInURL ?
              <div className="preview-contact-info-item center-center">
                <span className="preview-contact-info-icon fs-14 translate-y-1"><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                <span className="preview-contact-info-title"><a href={linkedInURL} target="_blank">{linkedInText}</a></span>
              </div>
            : null
          }
          {
            gitHubText && gitHubURL ?
              <div className="preview-contact-info-item center-center">
                <span className="preview-contact-info-icon"><i className="fa fa-github" aria-hidden="true"></i></span>
                <span className="preview-contact-info-title"><a href={gitHubURL} target="_blank">{gitHubText}</a></span>
              </div>
            : null
          }
        </div>
        <div className="preview-section">
          <div className="preview-section-title">SKILLS</div>
          <div className="preview-section-content flex-center flex-wrap">
            {previewSkillsHTML}
          </div>
        </div>
        <div className="preview-section">
          <div className="preview-section-title">WORK EXPERIENCE</div>
          <div className="preview-section-content">
            {previewWorkExperienceHTML}
          </div>
        </div>
        <div class="preview-section">
          <div class="preview-section-title">OTHER ACTIVITIES</div>
          <div class="preview-section-content">
            {previewActivityHTML}
          </div>
        </div>
        <div class="preview-section">
          <div class="preview-section-title">EDUCATION</div>
          <div class="preview-section-content">
            {previewEducationHTML}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrintPage;