import React from 'react';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useForm } from "react-hook-form";

import { Container, Title, Column, TitleCadastro, SubtitleCadastro, TextContent, Row, Wrapper } from './styles';

const Cadastro = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = (formData) => {
        console.log('Cadastro realizado com sucesso!', formData);
        alert('Cadastro realizado com sucesso!');
    };

    return (
        <>
            <Header />
            <main>
                <Container>
                    <Column as="section" aria-labelledby="plataforma-title">
                        <Title id="plataforma-title">
                            A plataforma para você aprender com experts, dominar as principais tecnologias
                            e entrar mais rápido nas empresas mais desejadas.
                        </Title>
                    </Column>
                    <Column as="section" aria-labelledby="cadastro-title">
                        <Wrapper>
                            <TitleCadastro id="cadastro-title">Comece agora grátis</TitleCadastro>
                            <SubtitleCadastro>Crie sua conta e make the change._ </SubtitleCadastro>
                            <form onSubmit={handleSubmit(onSubmit)} aria-live="polite">
                                
                                <Input id="nome" placeholder="Nome completo" leftIcon={<MdPerson />} name="nome" control={control} />
                                {errors.nome && <span>Nome é obrigatório</span>}
                                
                                
                                <Input id="email" placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                                {errors.email && <span>E-mail é obrigatório</span>}
                                
                                
                                <Input id="senha" type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                                {errors.senha && <span>Senha é obrigatório</span>}
                                
                                <Button title="Criar minha conta" variant="secondary" type="submit" />
                            </form>
                            <TextContent>
                                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                                desafio profissional, evoluindo em comunidade com os melhores experts.
                            </TextContent>
                            <Row>
                                <span>Já tem uma conta?</span>
                                <a href="/login">Entre aqui</a>
                            </Row>
                        </Wrapper>
                    </Column>
                </Container>
            </main>
        </>
    );
}

export { Cadastro };
