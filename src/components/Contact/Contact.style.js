import styled from 'styled-components'

export const ContactWrapper = styled.section`
  margin-top: 200px;
  margin-bottom: 200px;
  height: 100%;
  position: relative;
  @media ${props => props.theme.media.tablet} {
    margin-top: 100px;
    margin-bottom: 80px;
  }
`

export const ContactBox = styled.div`
  width: calc(100% - 30px);
  position: relative;
  height: 400px;
  margin-bottom: 50px;
  margin-top: 150px;

  background: ${props => props.theme.gradient};

  padding: 20px;
  border-radius: 10px;

  @media ${props => props.theme.media.fablet} {
    width: 100%;
    padding: 10px;
    margin-top: 50px;
  }
`
export const RightContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 12.5%;
  right: 0;
  width: fit-content;
  text-align: center;

  &,
  p,
  h3 {
    color: #f8f8f8;
  }

  @media ${props => props.theme.media.fablet} {
    display: none;
  }
`

export const ContactForm = styled.form`
  border-top: 5px solid ${p => (p.theme.dark ? p.theme.accentColor : p.theme.primaryColor)};
  position: absolute;
  width: 70%;

  top: -50px;
  left: -40px;
  padding: 50px 30px;
  background: ${props => props.theme.secondaryColor};
  border-radius: 10px;
  min-height: 400px;

  box-shadow: ${props => props.theme.shadowSmall};

  label {
    user-select: none;
  }

  label span {
    width: 100%;
    font-size: 0.85em;
    color: ${p => (p.theme.dark ? '#fff' : '#252525')};
  }

  .label__name {
    margin-right: 10px;
    flex: 1;
  }

  .label__email {
    flex: 1;
  }

  .label__message {
    flex: 1;
  }

  .submit__btn {
    width: fit-content;
  }

  input,
  textarea {
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #eaeaea;
    border: none;
    margin: 10px 0;
    width: 100%;
    outline: none;
  }

  textarea {
    margin: 10px 0;
    width: 100%;
    height: 200px;
    resize: none;
  }

  .grecaptcha-badge {
    display: none !important;
  }

  .grecaptcha__text {
    margin-bottom: 15px;
    font-size: 12px;
    width: 100%;
  }

  @media ${props => props.theme.media.fablet} {
    input,
    textarea {
      padding: 20px 15px;
    }

    padding: 30px 25px;
    padding-bottom: 20px;
    position: unset;
    width: 100%;
    top: 0px;
    right: 0px;
  }

  @media ${props => props.theme.media.mobile} {
    .group__name-email {
      flex-direction: column;
    }
    .label__name {
      margin-right: 0;
    }
  }
`
