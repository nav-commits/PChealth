import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Divider from '../../Atoms/Divider/Divider';

export default function ServiceTypeContent({ filterData }) {
    return (
        <View>
            {filterData.map((option) => {
                return (
                    <View key={option.id}>
                        <Text
                            style={{
                                fontSize: 17,
                                fontWeight: 'bold',
                                color: 'hsl(240, 25%, 25%)',
                                paddingLeft: 10,
                            }}
                        >
                            {option.popular}
                        </Text>
                        {option.PopularServices.map((item) => {
                            return (
                                <View style={{ padding: 12 }} key={item?.id}>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: 'hsl(240, 25%, 25%)',
                                        }}
                                    >
                                        {item?.title}
                                    </Text>
                                    <Divider backgroundColor='grey' width='100%' height={0.5} />
                                </View>
                            );
                        })}
                        <Text
                            style={{
                                fontSize: 17,
                                fontWeight: 'bold',
                                color: 'hsl(240, 25%, 25%)',
                                paddingLeft: 10,
                            }}
                        >
                            {option.moreCareService}
                        </Text>
                        {option.moreCareServices.map((item) => {
                            return (
                                <View style={{ padding: 12 }} key={item?.id}>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: 'hsl(240, 25%, 25%)',
                                        }}
                                    >
                                        {item?.title}
                                    </Text>
                                    <Divider backgroundColor='grey' width='100%' height={0.5} />
                                </View>
                            );
                        })}
                    </View>
                );
            })}
        </View>
    );
}
