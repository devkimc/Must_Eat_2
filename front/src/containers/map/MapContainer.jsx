import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import {
    SearchInput,
    SearchResult,
    MapComponent,
    InviteMembBtn,
    InviteMembModal,
} from 'components';
import * as Constants from 'constants/mapConstants';
import { warningToast, errorToast } from 'utils/toast';

const Wrapper = styled.div``;

const Container = styled.div`
    background: white;
    position: absolute;
    z-index: 20;
    width: 24rem;
    height: 100vh;
    box-shadow: 0 0 0.3rem 0 rgb(0 0 0 / 20%), 0.3rem 0 1rem 0 rgb(0 0 0 / 10%);
`;

const MapContainer = () => {
    const [mapObj, setMapObj] = useState(''); // p
    const [markers, setMarkers] = useState([]); // p
    const [searchRes, setSearchRes] = useState([]); // p

    const [allSearchRes, setAllSearchRes] = useState([]);
    const [InviteMemb, setInviteMemb] = useState(false);
    const searchIp = useSelector(state => state.search.input);

    /* 멤버 초대 */
    const onClickInviteMembBtn = () => {
        setInviteMemb(true);
    };

    const closeInviteMemb = () => {
        setInviteMemb(false);
    };

    /* 마커 출력 관리 */
    const showMarker = place => {
        const marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(place.y, place.x),
            clickable: true,
        });
        marker.setMap(mapObj);
        setMarkers(el => el.concat(marker));
    };

    const removeMarker = () => {
        markers.forEach(el => el.setMap(null));
    };

    /* 중심 좌표 설정 */
    const setCenter = index => {
        if (searchRes[index] !== undefined) {
            mapObj.setCenter(
                new kakao.maps.LatLng(searchRes[index].y, searchRes[index].x),
            );
        }
    };
    const searchOption = {
        page: 1,
        x: Constants.SEARCH_OPT_X,
        y: Constants.SEARCH_OPT_Y,
        category_group_code: Constants.SEARCH_OPT_CATEGORY_FOOD,
    };

    const initMap = async () => {
        const mapOptions = {
            center: new kakao.maps.LatLng(
                Constants.POSITION_LAT_CDNT,
                Constants.POSITION_LNG_CDNT,
            ),
            level: 8,
        };
        const container = document.getElementById('map');
        const initMapObj = new kakao.maps.Map(container, mapOptions);
        setMapObj(initMapObj);
    };

    /* global Kakao */
    useEffect(() => {
        Kakao.init(process.env.REACT_APP_API_KEY_KAKAO_MAP);
    }, []);

    /* global kakao */
    useEffect(() => {
        /* 카카오맵 */
        const script = document.createElement('script');
        script.onload = () => kakao.maps.load(initMap);
        script.src =
            Constants.KAKAO_MAP_API_URL +
            process.env.REACT_APP_API_KEY_KAKAO_MAP +
            Constants.KAKAO_MAP_API_SERVICES;
        document.head.appendChild(script);
    }, []);

    /* 식당 검색 */
    useEffect(() => {
        if (searchRes.length) {
            removeMarker();
            setMarkers([]);
            setCenter(0);
            searchRes.forEach(res => showMarker(res));
        }
    }, [searchRes]);

    const onSearchCB = (result, status) => {
        const resStatus = kakao.maps.services.Status;
        if (status === resStatus.OK) {
            setSearchRes(result);
            setAllSearchRes(el => el.concat(result));
        } else if (status === resStatus.ZERO_RESULT) {
            warningToast('검색 결과가 없습니다!');
        } else {
            errorToast('서버 응답에 문제가 있습니다!');
        }
    };

    const onSearch = () => {
        if (!searchIp) {
            warningToast('검색어를 입력해주세요');
        }

        setAllSearchRes([]);
        const places = new kakao.maps.services.Places();
        places.keywordSearch(searchIp, onSearchCB, searchOption);
    };

    return (
        <Wrapper>
            <Container>
                <SearchInput onSearch={onSearch} />
                <SearchResult allSearchRes={allSearchRes} />
            </Container>
            <InviteMembBtn onClickInviteMembBtn={onClickInviteMembBtn} />
            {InviteMemb && (
                <InviteMembModal closeInviteMemb={closeInviteMemb} />
            )}
            <MapComponent />
        </Wrapper>
    );
};

export default MapContainer;
