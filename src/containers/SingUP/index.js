import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import LoginImg from '../../assets/img-singup.svg'
import Logo from '../../assets/logo.svg'
import { Button } from '../../components'
import api from '../../services/api'
import verificationDomain from '../../services/domains'
import {
  Container,
  ContainerItens,
  ErrorMenssage,
  Input,
  Label,
  LoginImage,
  SignInLink
} from './styles'

export function SingUP() {
  const history = useHistory()
  const domainValidation = value => {
    const domain = value.split('@')[1]
    return verificationDomain.includes(domain)
  }
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail valido')
      .test('Domínio inválido', domainValidation)
      .required('O e-mail é obrigatorio'),
    password: Yup.string()
      .required('A senha é obrigatorio')
      .min(6, 'A senha deve ter pelo menos 6 digitos'),
    ConfirmPassword: Yup.string()
      .required('A senha é obrigatorio')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastro realizado com sucesso')
      } else if (status === 409) {
        toast.error('E-mail já cadastrado! Faça login para continuar')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente')
    }
    setTimeout(() => {
      history.push('/')
    }, 1000)
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="Login-Image" />
      <ContainerItens>
        <img alt="logo-code-burguer" src={Logo} />
        <h1>Cadastre-se</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMenssage>{errors.name?.message}</ErrorMenssage>
          <Label error={errors.email?.message}>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMenssage>{errors.email?.message}</ErrorMenssage>
          <Label error={errors.password?.message}>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMenssage>{errors.password?.message}</ErrorMenssage>
          <Label error={errors.ConfirmPassword?.message}>Confirmar Senha</Label>
          <Input
            type="password"
            {...register('ConfirmPassword')}
            error={errors.ConfirmPassword?.message}
          />
          <ErrorMenssage>{errors.ConfirmPassword?.message}</ErrorMenssage>
          <Button
            type="submit"
            style={{ marginTop: '25px', marginBottom: '25px' }}
          >
            Sing UP
          </Button>
        </form>
        <SignInLink>
          Já possui conta? <a href="/login">Sing In</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
