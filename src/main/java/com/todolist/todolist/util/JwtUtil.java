package com.todolist.todolist.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
public class JwtUtil {

    private SecretKey KEY;
    private long EXPIRATION_TIME;

    public JwtUtil(
            @Value("${jwt.secret}") String secret,
            @Value("${jwt.expirationMs}") long expiration){
        this.KEY = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
        this.EXPIRATION_TIME = expiration;
    }

    public String generateToken(Long userId){
        return Jwts.builder()
                .setSubject(String.valueOf(userId))
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(KEY)
                .compact();
    }

    public Long extractUserId(String token){
        String userId = Jwts.parserBuilder()
                .setSigningKey(KEY)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
        return Long.parseLong(userId);
    }

    public Date extractExpiry(String token){
        return Jwts.parserBuilder()
                .setSigningKey(KEY)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getExpiration();
    }

    public Boolean checkTokenExpiry(String token){
        return extractExpiry(token).before(new Date());
    }

    public Boolean validateToken(String token, Long userId){
        final Long extractedUserId = extractUserId(token);
        return (extractedUserId.equals(userId) && !checkTokenExpiry(token));
    }
}
