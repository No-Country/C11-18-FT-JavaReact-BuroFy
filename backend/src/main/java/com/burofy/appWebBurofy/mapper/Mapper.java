///package com.burofy.appWebBurofy.mapper;
///
///import lombok.RequiredArgsConstructor;
///import org.modelmapper.ModelMapper;
///import org.springframework.beans.factory.annotation.Autowired;
///import org.springframework.stereotype.Component;
///
///import java.util.List;
///import java.util.stream.Collectors;
///
///@Component
/////@RequiredArgsConstructor
///public class Mapper {
///
    ///@Autowired(required = true)
    ///private  ModelMapper mapper;
    ///
    ///public <S, D> D map(S source, Class<D> destinationClass){
        ///return mapper.map(source, destinationClass);
    ///}
    ///
    ///public <S, D> List<D> mapAll(List<S> sourceList, Class<D> destinationClass) {
        ///return sourceList.stream()
                ///.map(e -> map(e, destinationClass))
                ///.collect(Collectors.toList());
    ///}
///}
