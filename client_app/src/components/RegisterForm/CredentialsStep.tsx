import PasswordInput from "@components/PasswordInput/PasswordInput";
import TextInput from "@components/TextInput/TextInput";
import { FormStepType } from "./RegisterForm";


export default function CredentialsStep({ formInputs, handleInputChange }: FormStepType) {
    return (<>
        
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Email
                    </label>
                    <TextInput
                        name="email"
                        value={formInputs.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Password
                    </label>
                    <PasswordInput
                        name="password"
                        value={formInputs.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Repeat password
                    </label>
                    <PasswordInput
                        name="passwordRepeat"
                        value={formInputs.passwordRepeat}
                        onChange={handleInputChange}
                    />
                </div>
    </>)
}
