import { useSkin } from '@hooks/useSkin'
import { Link, useHistory } from 'react-router-dom'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'
import { Fragment, useContext, useState } from 'react'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import * as auth from './auth'
import { useDispatch } from 'react-redux'
import { AbilityContext } from '@src/utility/context/Can'
import { handleLogin } from '@store/actions/auth'
import { toast, Slide } from 'react-toastify'
import { getHomeRouteForLoggedInUser } from '@utils'
import Avatar from '@components/avatar'
import { Coffee } from 'react-feather'
import { useAbility } from '@casl/react'

const ToastContent = ({ name, role }) => (
    <Fragment>
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
                <h6 className='toast-title font-weight-bold'>Welcome, {name}</h6>
            </div>
        </div>
        <div className='toastify-body'>
            <span>You have successfully logged in as an {role} user to AB Sales Pro. Now you can start to explore. Enjoy!</span>
        </div>
    </Fragment>
)

const LoginV2 = () => {
    const [skin, setSkin] = useSkin()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const ability = useAbility(AbilityContext)
    const dispatch = useDispatch()
    const history = useHistory()

    const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
        source = require(`@src/assets/images/pages/${illustration}`).default

    const handleSubmit = (event, errors) => {
        if (errors && !errors.length) {
            auth
                .Login({ email, password })
                .then(res => {
                    if (res.hasOwnProperty('data')) {
                        const data = res.data
                        const userAbility = (data.user.role.type === 'admin') ? [{ action: "manage", subject: "all" }] : []
                        data.ability = userAbility
                        dispatch(handleLogin(data))
                        ability.update(userAbility)
                        history.push(getHomeRouteForLoggedInUser(res.data.user.role.name))
                        toast.success(
                            <ToastContent name={data.user.username} role={data.user.role.name} />,
                            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
                        )
                    }
                })
                .catch(err => console.log('bad login'))
        }
    }

    return (
        <div className='auth-wrapper auth-v2'>
            <Row className='auth-inner m-0'>
                <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
                    <h2 className='brand-text text-primary ml-1'>AB Sales Pro</h2>
                </Link>
                <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
                    <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
                        <img className='img-fluid' src={source} alt='Login V2' />
                    </div>
                </Col>
                <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
                    <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
                        <CardTitle tag='h2' className='font-weight-bold mb-1'>
                            Welcome to AB Sales Pro 👋
                        </CardTitle>
                        <CardText className='mb-2'>Please sign-in to your account</CardText>
                        <AvForm className='auth-login-form mt-2' onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label className='form-label' for='login-email'>
                                    Email
                                </Label>
                                <AvInput
                                    required
                                    autoFocus
                                    type='email'
                                    value={email}
                                    id='login-email'
                                    name='login-email'
                                    placeholder='john@example.com'
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <div className='d-flex justify-content-between'>
                                    <Label className='form-label' for='login-password'>
                                        Password
                                    </Label>
                                    <Link to='/forgot-password'>
                                        <small>Forgot Password?</small>
                                    </Link>
                                </div>
                                <InputPasswordToggle
                                    required
                                    tag={AvInput}
                                    value={password}
                                    id='login-password'
                                    name='login-password'
                                    className='input-group-merge'
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />
                            </FormGroup>
                            <Button.Ripple color='primary' block disabled={!email.length || !password.length}>
                                Sign in
                            </Button.Ripple>
                        </AvForm>
                    </Col>
                </Col>
            </Row>
        </div>
    )
}

export default LoginV2
