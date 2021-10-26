package com.example.global.metier;

import com.example.global.dao.UserRepository;
import com.example.global.entities.User;
import com.example.global.util.TrackerUtil;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;

@AllArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository ;
    private final TrackerUtil trackerUtil ;
    private final FilesStorageServiceImpl filesStorageService;

    @Transactional
    public User updateProfile(User user, MultipartFile file)
    {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        //user.setId(trackerUtil.getLoggedUser().getId());
        User updatedUser = userRepository.findById(trackerUtil.getLoggedUser().getId()).get();
        System.out.println(updatedUser.getImageUrl());
        updatedUser.setImageUrl(fileName);
        System.out.println(updatedUser.getImageUrl());
        updatedUser.setNom(user.getNom());
        updatedUser.setPrenom(user.getPrenom());
        updatedUser.setGmail(user.getGmail());
        updatedUser.setSexe(user.getSexe());
        updatedUser.setPhone(user.getPhone());
        updatedUser.setCin(user.getCin());



        User anotherUser =userRepository.save(updatedUser);
        filesStorageService.save(file);
        return anotherUser;
    }

    public User getCurrentUser() {
        return trackerUtil.getLoggedUser();
    }
}
