import LoginImg from "@assets/login.svg";
import NolatechLogoWhite from "@assets/nolatech-logo-white.png";
import NolatechLogoGray from "@assets/nolatech-logo-gray.png";
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {ILoginForm} from '@modules/Auth/infrastructure/interfaces';
import {useContext, useRef, useState} from 'react';
import Input from '@common/components/Input.tsx';
import {RiErrorWarningLine, RiLockLine, RiLockUnlockLine, RiMailLine} from '@remixicon/react';
import {Button, ThemeSwitch} from '@common/components';
import {EmailPattern, messages} from '@common/utils';
import {BarsAnimation} from '@modules/Auth/presentation/components/BarsAnimation.tsx';
import {useNavigate} from 'react-router-dom';
import {AppSettingsContext} from '@context/AppSettingsContext.tsx';
import {LoginUseCase} from '@modules/Auth/domain/useCases';
import {Bounce, toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "@modules/Auth/infrastructure/context/AuthContext";

export function Login() {
   const navigate = useNavigate();
   const { isDarkMode, toggleDarkMode } = useContext(AppSettingsContext);
   const { setUser } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const formRef = useRef(null);

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<ILoginForm>({
        defaultValues:{
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<ILoginForm> = async (data: ILoginForm) => {
        try
        {
            setLoading(true);
            await new Promise<void>((resolve, reject) => setTimeout(async() => {
                const user = await LoginUseCase.handler(1);
                setLoading(false);
                if (user.email === data.email && user.password === data.password)
                {
                    setUser(user);
                    navigate('/dashboard');
                    resolve();
                    return;
                }
                reject('Invalid credentials. Please check your email and password, and try again.');
            }, 2000));
        }
        catch (e: unknown)
        {
            toast.error(e as string, {
                position: "top-right",
                icon: <RiErrorWarningLine size={20} />,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
        finally
        {
            setLoading(false);
        }
    }

    const getErrorKey = (err: object, field: string): 'maxLength' | 'email' | 'required' => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return err[field]?.type === 'pattern' ? field : err[field]?.type;
    }

  return (
    <section className={"h-[100vh] flex flex-row-reverse md:flex-row w-full"}>
        <div className={"w-full relative md:w-5/6 lg:w-3/6 min-h-full flex flex-col items-center justify-center bg-slate-100 dark:!bg-app-accent shadow-xl dark:!shadow-black shadow-gray-300 px-4 md:px-0"}>
            <BarsAnimation />
            <ThemeSwitch className="absolute md:hidden top-0 right-2 !bg-transparent" isDark={isDarkMode} toggleTheme={toggleDarkMode} />
            <img
                src={isDarkMode ? NolatechLogoWhite : NolatechLogoGray}
                alt="nolatech_logo_white"
                height="auto"
                width="auto"
                className="w-3/6 mb-4"
            />
            <h1 className="text-app-secondary dark:!text-white font-black text-2xl">
                Login into your account
            </h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full md:w-5/6 lg:w-4/5 mt-10 gap-10 flex flex-col"
                ref={formRef}>
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: true,
                        maxLength: 50,
                        pattern: EmailPattern,
                    }}
                    render={({ field: { ref: fRef, onChange, value } }) => (
                        <Input
                            type="text"
                            value={value}
                            name="Email address"
                            errorMessage={errors.email ? messages[getErrorKey(errors, 'email')](50) : ''}
                            inputRef={fRef}
                            className="pl-3 !pr-20"
                            showIcon={true}
                            icon={
                                <RiMailLine
                                    size={10}
                                    className="text-app-secondary bg-app-primary dark:!text-app-accent px-3 dark:!bg-app-primary py-2 h-full w-14 rounded-r-md absolute top-0 right-0"
                                />
                            }
                            showError={!!errors.root?.serverError || !!errors.email}
                            placeholder="jane@nolatech.com"
                            onChange={onChange}
                        />
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: true,
                        maxLength: 20,
                    }}
                    render={({ field: { ref: fRef, onChange, value } }) => (
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            value={value}
                            name="Password"
                            errorMessage={errors.password ? messages[getErrorKey(errors, 'password')](50) : ''}
                            inputRef={fRef}
                            className="pl-3 !pr-20"
                            showIcon={true}
                            icon={
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {!showPassword &&
                                        <RiLockLine
                                            size={10}
                                            className="hover:!bg-orange-500 bg-app-primary text-app-accent px-3 py-2 h-full w-14 rounded-r-md  absolute top-0 right-0"
                                        />
                                    }
                                    {showPassword &&
                                        <RiLockUnlockLine
                                            size={10}
                                            className="bg-app-primary text-app-accent px-3 hover:!bg-orange-500 py-2 h-full w-14 rounded-r-md absolute top-0 right-0"
                                        />}
                                </button>
                            }
                            showError={!!errors.root?.serverError || !!errors.password}
                            placeholder="**************"
                            onChange={onChange}
                        />
                    )}
                />

                <Button customClassName={"w-full mt-20 bg-app-primary rounded-lg py-3 text-bold"}
                        text="Login"
                        loaderColor="#F9B58B"
                        spinnerColor="white"
                        typeButton="submit"
                        isLoading={loading} />
            </form>
        </div>

        <div className={"w-full hidden md:flex items-center justify-center"}>
            <img src={LoginImg}
                 height="auto"
                 width="auto"
                 className="w-4/6"
                 alt="draw_of_a_girl_with_a_phone_login_in_an_app" />

            <ThemeSwitch className="absolute top-3 right-3 bg-neutral-100 dark:!bg-app-accent dark:!text-slate-100" isDark={isDarkMode} toggleTheme={toggleDarkMode} />
        </div>

        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
        />
    </section>
  )
}