import {Button, List, Typography} from "antd";
import {Link} from "react-router-dom";
import React, {useMemo} from "react";
import {getStoredUser} from "../../../Shared/functions/useGetStoredUser";
const { Text } = Typography;

export const ListItem = ({ item }) => {
    const storedUser = useMemo(() => getStoredUser(item.id), [item.id]);

    const displayItem = {
        ...item,
        ...storedUser,
    };
    return (
        <>
            <List.Item
                actions={[
                    <Link to={`/detail/${item.id}`}>
                        <Button type="link">Подробнее</Button>
                    </Link>,
                ]}
            >
                <div>
                    <Text strong>{displayItem.name}</Text>
                    <br/>
                    <Text type="secondary">{displayItem.email}</Text>
                </div>
            </List.Item></>
    )
}