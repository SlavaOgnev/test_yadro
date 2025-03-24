import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {FormProvider, useForm} from "react-hook-form";
import { Card, Button, Form, Modal } from "antd";
import { CardContentContext } from "../ListPage/ListPage";
import {ControlledInput} from "./ui/ControlledInput";
import {createDeafaultValue} from "./helpers/createDeafaultValue";

export const EditPage = () => {
    const cardContent = useContext(CardContentContext);
    const { id } = useParams();
    console.log(id)
    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useState(true);
    const { handleSubmit, control } = useForm(
        {
            defaultValues:createDeafaultValue(cardContent, id),
        }
    );
    const onSubmit = (data) => {
        localStorage.setItem(`user_${id}`, JSON.stringify(data));
        navigate(-1);
        setModalVisible(false);
    };

    return (
        <Modal
            visible={modalVisible}
            title="Редактирование пользователя"
            onCancel={() => navigate(`/detail/${id}`)}
            footer={null}
        >
            <Card style={{ maxWidth: 600, margin: "auto" }}>
                <FormProvider control={control}>
                    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
                        <Form.Item label="Имя">
                            <ControlledInput
                               name={'name'}
                               rules={{ required: "Введите имя" }}
                            />
                        </Form.Item>
                        <Form.Item label="Email">
                            <ControlledInput
                                name={'email'}
                                rules={{
                                    required: "Введите email",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Некорректный email",
                                    },
                                }}
                            />
                        </Form.Item>
                        <Form.Item label="Телефон">
                            <ControlledInput
                                name={'phone'}
                            />
                        </Form.Item>
                        <Form.Item label="Веб-сайт">
                            <ControlledInput
                                name={'website'}
                                rules={{
                                    pattern: {
                                        value: /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6}\.?)(\/[\w.-]*)*\/?$/,
                                        message: "Некорректный URL",
                                    },
                                }}
                            />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" style={{ marginRight: "10px" }}>
                            Сохранить
                        </Button>
                        <Button onClick={() => navigate(`/detail/${id}`)}>Отмена</Button>
                    </Form>
                </FormProvider>

            </Card>
        </Modal>
    );
};
