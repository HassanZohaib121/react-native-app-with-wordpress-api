import * as React from 'react';
// import { Text } from 'react-native';
import { FAB, Portal, PaperProvider, Provider, Appbar } from 'react-native-paper';

const FloatingActionButton = () => {
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    // const [state, setState] = React.useState({ open: false });

    // const onStateChange = ({ open }) => setState({ open });

    // const { open } = state;

    // const _goBack = () => console.log('Went back');

    // const _handleSearch = () => console.log('Searching');

    // const _handleMore = () => console.log('Shown more');

    return (
        <PaperProvider>
            <Portal>
                <FAB.Group
                    open={open}
                    visible
                    icon={open ? 'calendar-today' : 'plus'}
                    actions={[
                        { icon: 'plus', onPress: () => console.log('Pressed add') },
                        {
                            icon: 'star',
                            label: 'Star',
                            onPress: () => console.log('Pressed star'),
                        },
                        {
                            icon: 'email',
                            label: 'Email',
                            onPress: () => console.log('Pressed email'),
                        },
                        {
                            icon: 'bell',
                            label: 'Remind',
                            onPress: () => console.log('Pressed notifications'),
                        },
                    ]}
                    onStateChange={onStateChange}
                    onPress={() => {
                        if (open) {
                            // do something if the speed dial is open
                        }
                    }}
                />
            </Portal>
        </PaperProvider>
        // <Provider>
        //     <Appbar.Header>
        //         <Appbar.BackAction onPress={_goBack} />
        //         <Appbar.Content title="Mywebtuts" subtitle="Subtitle" />
        //         <Appbar.Action icon="magnify" onPress={_handleSearch} />
        //         <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        //     </Appbar.Header>
        //     <Text style={{ textAlign: 'center', fontSize: 30 }}>
        //         React Native Material FAB Group Tutorial
        //     </Text>
        //     <Portal>
        //         <FAB.Group
        //             open={open}
        //             icon={open ? 'calendar-today' : 'plus'}
        //             actions={[
        //                 { icon: 'plus', onPress: () => console.log('Pressed add') },
        //                 {
        //                     icon: 'star',
        //                     label: 'Star',
        //                     onPress: () => console.log('Pressed star'),
        //                 },
        //                 {
        //                     icon: 'email',
        //                     label: 'Email',
        //                     onPress: () => console.log('Pressed email'),
        //                 },
        //                 {
        //                     icon: 'bell',
        //                     label: 'Remind',
        //                     onPress: () => console.log('Pressed notifications'),
        //                     small: false,
        //                 },
        //             ]}
        //             onStateChange={onStateChange}
        //             onPress={() => {
        //                 if (open) {
        //                     // do something if the speed dial is open
        //                 }
        //             }}
        //         />
        //     </Portal>
        // </Provider>
    );
};


export default FloatingActionButton;