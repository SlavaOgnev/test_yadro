import React, { useEffect, useState } from "react";
import {useParams, Link, Outlet} from "react-router-dom";
import {Card, Button, Typography} from "antd";
import {CardContentContext} from '../ListPage/ListPage'
import {CustomSpin} from "../../Shared/ui/CustomSpin/CustomSpin";
import {getStoredUser} from "../../Shared/functions/useGetStoredUser";


const { Title, Paragraph } = Typography;

export const DetailPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const storedUser = getStoredUser(id);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, [id]);

    if (!user) return <CustomSpin/>;

    return (
        <Card title={storedUser.name || user.name} style={{ maxWidth: 600, margin: "auto" }}>
            <Title level={4}>{storedUser.email || user.email}</Title>
            <Paragraph>
                <b>Телефон:</b> {storedUser?.phone || user?.phone}
            </Paragraph>
            <Paragraph>
                <b>Веб-сайт:</b> <a href={`https://${storedUser.website || user?.website}`} target="_blank" rel="noopener noreferrer">{ storedUser.website|| user.website}</a>
            </Paragraph>
            <Paragraph>
                <b>Адрес:</b> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </Paragraph>
            <Paragraph>
                <b>Компания:</b> {user.company.name} — {user.company.catchPhrase}
            </Paragraph>
            <Link to={`edit`}>
                <Button type="primary">Редактировать</Button>
            </Link>
            <CardContentContext.Provider value={user}>
                <Outlet />
            </CardContentContext.Provider>
        </Card>
    );
};
